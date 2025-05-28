import img from "../assets/freaquency.png"
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
                transform: `translateY(600px)  translateX(-50%) rotateX(-100deg)`,
                filter: "saturate(20) invert()"
            }}
        />
    )
}
