import { useState } from "react"
import { SpriteData } from "../constants/spriteData"
import { useGameStore } from "../hooks/useGameData"
import { usePlayerStore } from "../hooks/usePlayerData"
import PlayerSprite from "./PlayerSprite"
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler"

export default function Scene() {

    const player = usePlayerStore()
    const location = useGameStore().currentScreenId
    const sprites = SpriteData[location]

    const [updateCameraPosKey, setUpdateCameraPosKey] = useState(0)

    const CAM_OFFSET_TOP = 620
    const CAM_OFFSET_FORWARDS = 0
    const CAM_PITCH = 97
    const CAM_PERSPECTIVE = 1300

    eventHandler.on(GLOBAL_EVENTS.SCREEN_RESOLUTION_REFRESH, () => {
        setUpdateCameraPosKey(updateCameraPosKey + 1)
    })

    return (
        <div
            key={"update" + updateCameraPosKey}
            style={{ perspective: CAM_PERSPECTIVE + "px" }}
            className={`perspective-origin-center transform-3d`}
        >
            <div
                className={`fixed w-[3000px] h-[2000px] origin-top transform-3d`}
                style={{
                    transform: `
                        rotateX(${CAM_PITCH}deg)
                        translateX(${-player.position.x + window.innerWidth / 2}px)
                        translateZ(${-CAM_OFFSET_TOP}px)
                        translateY(${(CAM_OFFSET_FORWARDS + player.position.y)}px)
                        `
                }}>
                {
                    /* sprites.map(sprite =>
                        <EntitySprite position={sprite.position} img={sprite.img} scale={sprite.scale} onInteract={sprite.onInteract} centered={sprite.centered} />
                    ) */
                    sprites.map(e => e.GetElement())
                }
                <PlayerSprite />
            </div>
        </div>
    )
}
