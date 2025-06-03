import type { Vector2 } from "./Globals";

export type GameElement = { position: Vector2, img: string, scale?: number, onInteract?: ()=>void, centered?: boolean }
