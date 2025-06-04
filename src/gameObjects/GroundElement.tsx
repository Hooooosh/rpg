import { Vector3, type Vector2 } from "../helpers/Vector";


export default function GroundElement(
    { position, img, width, height, rotation = new Vector3(0, 0, 0) }:
        {
            position: Vector2 | Vector3,
            img: string, scale?: number,
            width: number,
            height: number,
            rotation?: Vector3,
        }) {

    return (
        <div
            className="transform-3d absolute"
            style={{
                left: position.x + "px",
                top: -position.y + "px",
                width: width + "px",
                height: height + "px",
                backgroundImage: `url(${img})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto",
                backgroundPosition: "center center",
                transformOrigin: "bottom center",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`
            }}
        />
    )
}
