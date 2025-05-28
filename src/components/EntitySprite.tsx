import { useEffect, useState } from "react";
import { RandomInt } from "../helpers/Random";
import type { Vector2 } from "../interfaces/Globals";


export default function EntitySprite({ position, img, scale }: { position: Vector2, img: string, scale?: number }) {
    const [hue, setHue] = useState(0)
    useEffect(()=>{
        setHue(RandomInt(180))
    }, [])

    return (
        <img
            src={img}
            className="transform-3d absolute"
            style={{
                left: position.x + "px",
                top: position.y + "px",
                transformOrigin: "center bottom",
                transform: `rotateX(-100deg) scale(${scale ?? 1})`,
                filter: `hue-rotate(${hue}deg) saturate(500%)`
            }}
        />
    )
}
