import { create } from "zustand";
import type { InventoryItem } from "../interfaces/Globals"
import { Vector2 } from "../interfaces/Globals"


export type PlayerState = {
    health: number;
    maxHealth: number;
    baseAttack: number;
    position: Vector2;
    inventory: InventoryItem[];
    takeDamage: (amount: number) => void;
    addItem: (id: number, amount?: number) => void;
    move: (v: Vector2) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    health: 10,
    maxHealth: 10,
    baseAttack: 1,
    position: new Vector2(0, 0),
    inventory: [],

    takeDamage: (amount) => {
        set((state) => ({ health: Math.max(0, state.health - amount) }))
    },

    addItem: (id, amount = 1) => {
        set((state) => {
            let newInv;
            const exists = state.inventory.findIndex(e => e.id === id) !== -1

            if (exists) {
                newInv = state.inventory.map(e => e.id === id ? { id: e.id, amount: e.amount + amount } : e)
            }
            else {
                newInv = [...state.inventory, { id: id, amount }]
            }

            return { inventory: newInv }
        })
    },

    move: (v: Vector2) => {
        set((state) => {
            const _new = new Vector2(state.position.x, state.position.y)
            _new.x += v.x
            _new.y += v.y
            return { position: _new }
        })
    }
}))
