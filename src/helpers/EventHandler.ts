
export enum GLOBAL_EVENTS {
    INVENTORY_OPEN,
    INVENTORY_CLOSE,
    TELEPORT,
    MOVE_START,
    MOVE_END,
    INTERACT,
}

type EventHandlerFunction = (...args: unknown[]) => void;

class EventHandler {
    private events: Map<GLOBAL_EVENTS, EventHandlerFunction[]> = new Map()

    on(event: GLOBAL_EVENTS, handler: EventHandlerFunction) {
        if (!this.events.has(event)) {
            this.events.set(event, [])
        }
        this.events.get(event)!.push(handler)
    }

    off(event: GLOBAL_EVENTS, handler: EventHandlerFunction) {
        const pickedHandlers = this.events.get(event)
        if (pickedHandlers) {
            this.events.set(event, pickedHandlers.filter(e => e !== handler))
        }
    }

    emit(event: GLOBAL_EVENTS, ...args: unknown[]) {
        this.events.get(event)?.forEach(handler => handler(...args))
    }
}

export const eventHandler = new EventHandler() /* singleton */
