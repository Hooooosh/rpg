import SignElement from "../gameObjects/SignElement";
import type { Vector2, Vector3 } from "../helpers/Vector";
import GenericSprite from "./GenericSprite";
import signImg from "../assets/images/sign.png"

export default class Sign extends GenericSprite {
    text: string;
    static readonly DEFAULT_W: number = 120;
    readonly img: string = signImg;
    
    constructor({position, rotation, text, spriteW, colliderW, centered}: {position: Vector2 | Vector3, rotation?: Vector3, text: string, spriteW?: number, colliderW?: number, centered?: boolean}) {
        super({position, rotation, spriteW, colliderW, centered});
        this.text = text;
    }

    GetElement() {
        return <SignElement sign={this} />
    }
}

