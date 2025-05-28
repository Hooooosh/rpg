import { Vector2 } from "../interfaces/Globals"
import { Screens } from "./screens"
import img from "../assets/freaquency.png"


type Sprite = { position: Vector2, img: string, scale?: number }

export const SpriteData: Record<Screens, Sprite[]> = {
    [Screens.HUB]: [
        { position: new Vector2(250, 200), img: img, scale: 1 },
        { position: new Vector2(450, 600), img: img, scale: 0.7 },
        { position: new Vector2(750, 100), img: img, scale: 0.3 },
    ],
    [Screens.HOUSE]: [

    ],
}
