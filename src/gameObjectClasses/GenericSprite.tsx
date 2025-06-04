import GenericSpriteElement from "../gameObjects/GenericSpriteElement";
import type { Vector2, Vector3 } from "../helpers/Vector";
import GameObject from "./Superclass";

export default class GenericSprite extends GameObject {
    img: string | undefined;

    constructor({ position, rotation, img, spriteW, colliderW, turnTowardPlayer, onInteract, centered }: {
        position: Vector3 | Vector2,
        rotation?: Vector3,
        img?: string,
        spriteW?: number,
        colliderW?: number,
        turnTowardPlayer?: boolean,
        onInteract?: () => void,
        centered?: boolean
    }) {
        super({ position, rotation, spriteW, colliderW, turnTowardPlayer, onInteract, centered });

        this.img = img;
    }

    GetElement() {
        return <GenericSpriteElement object={this} />
    }
}

