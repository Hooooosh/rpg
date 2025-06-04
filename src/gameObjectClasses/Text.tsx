import type { Vector2, Vector3 } from "../helpers/Vector";
import GenericSprite from "./GenericSprite";
import signImg from "../assets/images/sign.png"
import TextElement from "../gameObjects/TextElement";

export default class Text extends GenericSprite {
    text: string;
    hasBackground: boolean;
    static readonly DEFAULT_W: number = 120;
    static readonly MAX_W: number = Math.min(window.innerWidth/3, 500)
    static readonly FONT_SIZE: number = 20
    readonly img: string = signImg;
    
    constructor({position, text, hasBackground, spriteW, colliderW, centered}: {
        position: Vector2 | Vector3, 
        text: string, 
        hasBackground?: boolean,
        spriteW?: number, 
        colliderW?: number, 
        centered?: boolean
    }) {
        super({position, spriteW, colliderW, centered});
        this.text = text;
        this.hasBackground = hasBackground ?? true;
    }

    GetElement() {
        return <TextElement text={this} />
    }
}

