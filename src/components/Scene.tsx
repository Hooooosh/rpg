import img from "../assets/freaquency.png"
import { SpriteData } from "../constants/spriteData"
import { useGameStore } from "../hooks/useGameData"
import { usePlayerStore } from "../hooks/usePlayerData"
import EntitySprite from "./EntitySprite"
import PlayerSprite from "./PlayerSprite"

export default function Scene() {

    const player = usePlayerStore()
    const location = useGameStore().currentScreenId
    const sprites = SpriteData[location]

    const CAM_OFFSET_TOP = 510
    const CAM_OFFSET_FORWARDS = 290
    const CAM_PITCH = 103
    const CAM_PERSPECTIVE = 1300

    return (
        <div
            className={`perspective-[${CAM_PERSPECTIVE}px] perspective-origin-center transform-3d`}
        >
            <div
                className={`fixed w-[3000px] h-[2000px] origin-top transform-3d`}
                style={{
                    backgroundImage: `url(${img})`,
                    transform: `
                        rotateX(${CAM_PITCH}deg)
                        translateX(${-player.position.x + window.innerWidth / 2}px)
                        translateZ(${-CAM_OFFSET_TOP}px)
                        translateY(${-CAM_OFFSET_FORWARDS + -player.position.y}px)
                        `
                }}>
                {
                    sprites.map(sprite =>
                        <EntitySprite position={sprite.position} img={sprite.img} scale={sprite.scale} />
                    )
                }
                <PlayerSprite />
            </div>
        </div>
    )
}
