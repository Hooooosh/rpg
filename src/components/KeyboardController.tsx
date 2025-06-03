import { useEffect } from "react"
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";

const MOVEMENT_KEYS = ['w', 'a', 's', 'd']

export default function KeyboardController() {
    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            if (e.repeat) return;
            if (MOVEMENT_KEYS.includes(e.key)) {
                eventHandler.emit(GLOBAL_EVENTS.MOVE_START, e.key)
            }
            if (e.key === "e") {
                eventHandler.emit(GLOBAL_EVENTS.INTERACT)
            }
        }

        const keyUpHandler = (e: KeyboardEvent) => {
            if (e.repeat) return;
            if (MOVEMENT_KEYS.includes(e.key)) {
                eventHandler.emit(GLOBAL_EVENTS.MOVE_END, e.key)
            }
        }

        window.addEventListener("keydown", keyDownHandler)
        window.addEventListener("keyup", keyUpHandler)
        return () => {
            window.removeEventListener("keydown", keyDownHandler)
            window.removeEventListener("keyup", keyUpHandler)
        }
    }, [])

    return null
}
