import { useEffect } from "react";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";
import { Vector3 } from "../helpers/Vector";
import Text from "../gameObjectClasses/Text";


export default function TextElement({ text, isShown = true }: { text: Text, isShown?: boolean }) {

    useEffect(() => {
        if (text.onInteract !== undefined) {
            eventHandler.on(GLOBAL_EVENTS.INTERACT, text.onInteract)
        }
    }, [])

    return (
        <div
            className="transform-3d absolute"
            style={{
                maxWidth: Text.MAX_W,
                left: text.position.x + "px",
                top: -text.position.y + "px",
                fontSize: Text.FONT_SIZE + "px",
                transformOrigin: "bottom center",
                transform: `translateY(-100%) ${text.centered ? "translateX(-50%)" : ""} rotateX(-100deg) ${text.position instanceof Vector3 ? `translateY(${text.position.z}px)` : ""}`,
            }}
        >
            {
                text.hasBackground ?
                    <div className={`text-center border-2 border-neutral-300 bg-white rounded-lg py-4 px-5`}
                        style={{
                            animationDuration: "250ms",
                            animationName: isShown ? "textAppearAnimation" : "textDisappearAnimation",
                            animationTimingFunction: isShown ? "ease-out" : "ease-in",
                            animationFillMode: "forwards",
                        }}
                    >
                        {text.text}
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
                        {text.text}
                    </div>

            }
        </div>
    )
}
