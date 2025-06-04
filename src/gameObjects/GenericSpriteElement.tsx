import { useEffect, useRef, useState } from "react";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";
import { usePlayerStore } from "../hooks/usePlayerData";
import GenericSprite from "../gameObjectClasses/GenericSprite";
import { Vector3 } from "../helpers/Vector";


export default function GenericSpriteElement({ object }: { object: GenericSprite }) {

    const getPlayerPos = () => usePlayerStore.getState().position
    const [rotationAngle, setRotationAngle] = useState(0)
    const ENTITY_INTERACTION_RADIUS = GenericSprite.DEFAULT_W * 0.5 * 1.2

    useEffect(() => {
        console.log(object.onInteract)
        if (object.onInteract !== undefined) {
            eventHandler.on(GLOBAL_EVENTS.INTERACT, () => {
                let updatedCoors = object.position
                if (imageRef.current) {
                    /* beleszámítja a sprite szélességét a scale-vel együtt, kiszámolja a pontos közepe coort */
                    updatedCoors = new Vector3(object.position.x + imageRef.current.width / 2, object.position.y, object.position.z)
                };

                const inRange = getPlayerPos().getDistanceFrom(updatedCoors) < 200;

                console.log(inRange)

                if (inRange && object.onInteract) {
                    object.onInteract()
                }
            })
        }
        if (object.turnTowardPlayer) {
            eventHandler.on(GLOBAL_EVENTS.MOVE, () => {
                if (!imageRef.current) return;
                const player = getPlayerPos()

                /* beleszámítja a sprite szélességét a scale-vel együtt, kiszámolja a pontos közepe coort */
                const updatedCoors = new Vector3(object.position.x + imageRef.current.width / 2, object.position.y, object.position.z)

                /* fél rotation - player-object szög */
                setRotationAngle(Math.PI / 2 + Math.atan2(player.y - updatedCoors.y, player.x - updatedCoors.x))
            })
        }
    }, [])

    const imageRef = useRef<HTMLImageElement | null>(null)

    return (
        <img
            ref={imageRef}
            src={object.img}
            className="transform-3d absolute"
            style={{
                left: object.position.x + "px",
                top: -object.position.y + "px",
                width: object.spriteW ? object.spriteW + "px" : GenericSprite.DEFAULT_W + "px",
                transformOrigin: "bottom center",
                transform: `
                    translateY(-100%) 
                    ${object.centered ? "translateX(-50%)" : ""} 
                    rotateX(-100deg) 
                    rotateY(${rotationAngle}rad) 
                    ${object.position instanceof Vector3 ? `translateY(${object.position.z}px)` : ""}
                    rotateX(${object.rotation.x}deg) rotateY(${object.rotation.y}deg) rotateZ(${object.rotation.z}deg)
                `,
            }}
        />
    )
}
