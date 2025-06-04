import { create } from "zustand";
import { type InventoryItem } from "../interfaces/Globals"
import { Vector3 } from "../helpers/Vector";


export type PlayerState = {
    health: number;
    maxHealth: number;
    baseAttack: number;
    position: Vector3;
    velocity: Vector3;
    inventory: InventoryItem[];
    takeDamage: (amount: number) => void;
    addItem: (id: number, amount?: number) => void;
    move: (v: Vector3) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    health: 10,
    maxHealth: 10,
    baseAttack: 1,
    position: new Vector3(0, 0, 0),
    velocity: new Vector3(0, 0, 0),
    maxVelocity: 10,

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

    jump: () => {
        set((state) => {
            const _new = state.velocity
            _new.z += 200
            return { position: _new }
        })
    },

    move: (v: Vector3) => {
        set((state) => {
            const _new = state.position
            _new.x += v.x
            _new.y += v.y
            return { position: _new }
        })
    },
}))
