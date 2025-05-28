
import type { PlayerState } from "../hooks/usePlayerData";
import { Vector2 } from "../interfaces/Globals";
import { eventHandler, GLOBAL_EVENTS } from "./EventHandler";


export default function initPlayerMovementHandler(playerStore: PlayerState) {
    const heldKeys = new Set<string>();

    function update() {
        let v = new Vector2(0, 0);

        if (heldKeys.has('w')) v.y = -1
        if (heldKeys.has('s')) v.y = 1
        if (heldKeys.has('a')) v.x = -1
        if (heldKeys.has('d')) v.x = 1

        if (v.length() !== 0) {
            v = v.normalized()

            playerStore.move(new Vector2(v.x * 5, v.y * 5));
        }
    }

    eventHandler.on(GLOBAL_EVENTS.MOVE_START, (key: unknown) => {
        heldKeys.add(key as string)
    })
    eventHandler.on(GLOBAL_EVENTS.MOVE_END, (key: unknown) => {
        heldKeys.delete(key as string)
    })

    setInterval(() => {
        update()
    }, 1000 / 60)

    return null;
}
