import GenericSpriteElement from "../gameObjects/GenericSpriteElement";
import type { Vector3, Vector2 } from "../helpers/Vector";
import GameObject from "./Superclass";

export default class GroundSprite extends GameObject {
    static readonly DEFAULT_W = 120
    img: string;
    spriteH: number;


    constructor({ img, position, rotation, spriteW, spriteH, centered }: {
        img: string,
        position: Vector3 | Vector2,
        spriteW: number,
        rotation?: Vector3,
        spriteH?: number,
        centered?: boolean
    }) {
        super({position, rotation, spriteW, centered});

        this.img = img;
        this.spriteH = spriteH ?? spriteW
    }

    GetElement() {
        return <GenericSpriteElement object={this} />
    }
}

