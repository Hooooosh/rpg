import { eventHandler, GLOBAL_EVENTS } from "./EventHandler";


export default function initScreenResizeHandler() {

    window.addEventListener("resize", ()=>{
        eventHandler.emit(GLOBAL_EVENTS.SCREEN_RESOLUTION_REFRESH)
    })

    return null;
}
