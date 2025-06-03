import { useEffect } from "react";
import { Vector3, type Vector2 } from "../interfaces/Globals";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";


export default function EntityText(
    { position, text = "", fontSize = 10, onInteract, centered = false, isShown = true, maxWidth, background = false }:
        {
            position: Vector2 | Vector3,
            text?: string,
            fontSize?: number,
            onInteract?: () => void,
            centered?: boolean,
            isShown?: boolean,
            maxWidth?: number,
            background?: boolean
        }) {

    useEffect(() => {
        if (onInteract !== undefined) {
            eventHandler.on(GLOBAL_EVENTS.INTERACT, onInteract)
        }
    }, [])

    return (
        <div
            className="transform-3d absolute"
            style={{
                maxWidth: maxWidth,
                left: position.x + "px",
                fontSize: fontSize + "px",
                top: position.y + "px",
                transformOrigin: "bottom center",
                transform: `translateY(-100%) ${centered ? "translateX(-50%)" : ""} rotateX(-100deg) ${position instanceof Vector3 ? `translateY(${position.z}px)` : ""}`,
            }}
        >
            {
                background ?
                    <div className={`text-center border-2 border-neutral-300 bg-white rounded-lg py-4 px-5`}
                        style={{
                            animationDuration: "250ms",
                            animationName: isShown ? "textAppearAnimation" : "textDisappearAnimation",
                            animationTimingFunction: isShown ? "ease-out" : "ease-in",
                            animationFillMode: "forwards",
                        }}
                    >
                        {text}
                        <div className="absolute bottom-0 w-10 aspect-square -z-10 left-1/2 border-2 border-neutral-300 bg-white rotate-45 -translate-x-1/2 translate-y-1/2" />
                        <div className="absolute bottom-0 w-16 h-10 -z-10 left-1/2 bg-white -translate-x-1/2 " />
                    </div>

                    :

                    <div className={`text-center`}
                        style={{
                            animationDuration: "250ms",
                            animationName: isShown ? "textAppearAnimation" : "textDisappearAnimation",
                            animationTimingFunction: isShown ? "ease-out" : "ease-in",
                            animationFillMode: "forwards",
                        }}
                    >
                        {text}
                    </div>

            }
        </div>
    )
}
