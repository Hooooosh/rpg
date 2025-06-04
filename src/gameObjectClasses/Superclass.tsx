import type { JSX } from "react";
import { Vector3, type Vector2 } from "../helpers/Vector";
/* position, img, width, scale, onInteract, centered = true, turnTowardPlayer = false */
export default abstract class GameObject {
    position: Vector3;
    rotation: Vector3;
    spriteW: number;
    colliderW: number;
    turnTowardPlayer: boolean;
    onInteract?: () => void;
    centered: boolean;

    static readonly DEFAULT_W: number;

    constructor({
        position,
        rotation = new Vector3(0, 0, 0),
        spriteW = (this.constructor as typeof GameObject).DEFAULT_W,
        colliderW = spriteW ?? (this.constructor as typeof GameObject).DEFAULT_W,
        turnTowardPlayer = false,
        onInteract,
        centered = true
    }: {
        position: Vector2 | Vector3,
        rotation?: Vector3,
        spriteW?: number,
        colliderW?: number,
        turnTowardPlayer?: boolean,
        onInteract?: () => void,
        centered?: boolean
    }) {
        this.position = new Vector3(position.x, position.y, position instanceof Vector3 ? position.z : 0);
        this.rotation = rotation;
        this.spriteW = spriteW;
        this.colliderW = colliderW;
        this.turnTowardPlayer = turnTowardPlayer;
        this.onInteract = onInteract;
        this.centered = centered;
    }

    abstract GetElement?(): JSX.Element;
}
