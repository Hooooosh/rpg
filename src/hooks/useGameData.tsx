import { create } from "zustand";
import { MapConnectionData } from "../constants/mapConnections";
import { Screens } from "../constants/screens";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";
import { Vector2 } from "../helpers/Vector";


type GameState = {
    currentScreenId: Screens;
    isInventoryOpen: boolean;
    moveToScreen: (id: Screens, lastId: Screens) => void;
};

export const useGameStore = create<GameState>((set) => ({
    currentScreenId: Screens.HUB,
    isInventoryOpen: false,

    moveToScreen: (id: Screens, moveFromId?: Screens) => {
        set((state) => {
            const lastId = moveFromId ?? state.currentScreenId
            const allConnections = MapConnectionData[id]
            const pickedConnection = allConnections.find(e => e.id === lastId)
            if (pickedConnection) {
                eventHandler.emit(GLOBAL_EVENTS.TELEPORT, new Vector2(pickedConnection.position.x, pickedConnection.position.y))
                return { currentScreenId: pickedConnection.id }
            }
            return { currentScreenId: lastId } /* ha nem találná (belső hiba) */
        })
    },
}))
