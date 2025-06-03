import img from "../assets/images/freaquency.png"
import { usePlayerStore } from "../hooks/usePlayerData"

export default function PlayerSprite() {

    const player = usePlayerStore()

    return (
        <img
            src={img}
            className="absolute transform-3d"
            style={{
                width: "150px",
                height: "200px",
                left: player.position.x + "px",
                top: player.position.y + "px",
                transformOrigin: "center bottom",
                transform: `translateX(-50%) translateY(-100%) rotateX(-100deg)`,
                filter: "saturate(20) invert()"
            }}
        />
    )
}
