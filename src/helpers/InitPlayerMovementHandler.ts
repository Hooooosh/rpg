
import type { PlayerState } from "../hooks/usePlayerData";
import { Vector2 } from "../interfaces/Globals";
import { eventHandler, GLOBAL_EVENTS } from "./EventHandler";


export default function initPlayerMovementHandler(playerStore: PlayerState) {
    const heldKeys = new Set<string>();

    const SPEED_MULTIPLIER = 12

    let lastTime = performance.now()

    function update() {
        /* DELTATIME update */
        const currentTime = performance.now()
        const dt = (currentTime - lastTime) / (1000/60)
        lastTime = currentTime
        
        updatePlayerMovement(dt)

        requestAnimationFrame(update)
    }

    function updatePlayerMovement(dt: number) {
        /* movement update commit */
        let v = new Vector2(0, 0);

        /* movement cancel */
        if (heldKeys.has('w') && !heldKeys.has('s')) v.y = -1
        else if (heldKeys.has('s') && !heldKeys.has('w')) v.y = 1
        if (heldKeys.has('a') && !heldKeys.has('d')) v.x = -1
        else if (heldKeys.has('d') && !heldKeys.has('a')) v.x = 1

        if (v.length() !== 0) {
            v = v.normalized()

            playerStore.move(new Vector2(
                v.x * SPEED_MULTIPLIER * dt,
                v.y * SPEED_MULTIPLIER * dt
            ));

            eventHandler.emit(GLOBAL_EVENTS.MOVE)
        }
    }

    eventHandler.on(GLOBAL_EVENTS.MOVE_START, (key: unknown) => {
        heldKeys.add(key as string)
    })
    eventHandler.on(GLOBAL_EVENTS.MOVE_END, (key: unknown) => {
        heldKeys.delete(key as string)
    })

    requestAnimationFrame(update)

    return null;
}
