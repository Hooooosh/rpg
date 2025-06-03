import { useEffect, useRef, useState } from "react";
import { Vector2, Vector3 } from "../interfaces/Globals";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";
import { usePlayerStore } from "../hooks/usePlayerData";
import GetDistance from "../helpers/Distance";


export default function EntitySprite(
    { position, img, scale, onInteract, centered = false, turnTowardPlayer = false }:
        {
            position: Vector2 | Vector3,
            img: string, scale?: number,
            onInteract?: () => void,
            centered?: boolean,
            turnTowardPlayer?: boolean,
        }) {

    const getPlayerPos = () => usePlayerStore.getState().position
    const [rotationAngle, setRotationAngle] = useState(0)
    const ENTITY_INTERACTION_RADIUS = 200

    useEffect(() => {
        if (onInteract !== undefined) {
            eventHandler.on(GLOBAL_EVENTS.INTERACT, () => {
                if (!imageRef.current) return;

                /* beleszámítja a sprite szélességét a scale-vel együtt, kiszámolja a pontos közepe coort */
                const updatedCoors = new Vector2(position.x + imageRef.current.width / 2, position.y)

                if (GetDistance(getPlayerPos(), updatedCoors) < ENTITY_INTERACTION_RADIUS) {
                    onInteract()
                }
            })
        }
        if (turnTowardPlayer) {
            eventHandler.on(GLOBAL_EVENTS.MOVE, () => {
                if (!imageRef.current) return;
                const player = getPlayerPos()

                /* beleszámítja a sprite szélességét a scale-vel együtt, kiszámolja a pontos közepe coort */
                const updatedCoors = new Vector2(position.x + imageRef.current.width / 2, position.y)

                /* fél rotation - player-object szög */
                setRotationAngle(Math.PI / 2 - Math.atan2(player.y - updatedCoors.y, player.x - updatedCoors.x))
            })
        }
    }, [])

    const imageRef = useRef<HTMLImageElement | null>(null)

    return (
        <img
            ref={imageRef}
            src={img}
            className="transform-3d absolute"
            style={{
                left: position.x + "px",
                top: position.y + "px",
                transformOrigin: "bottom center",
                transform: `
                    translateY(-100%) 
                    ${centered ? "translateX(-50%)" : ""} 
                    rotateX(-100deg) 
                    rotateY(${rotationAngle}rad) 
                    scale(${scale ?? 1}) 
                    ${position instanceof Vector3 ? `translateY(${position.z}px)` : ""}
                `,
            }}
        />
    )
}
