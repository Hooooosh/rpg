import { Vector2 } from "../helpers/Vector"
import { Screens } from "./screens"

type Connection = { id: Screens, position: Vector2 }

export const MapConnectionData: Record<Screens, Connection[]> = {
    [Screens.HUB]: [
        { id: Screens.HOUSE, position: new Vector2(-20, 0) }
    ],
    [Screens.HOUSE]: [
        { id: Screens.HUB, position: new Vector2(10, 0) }
    ],
}