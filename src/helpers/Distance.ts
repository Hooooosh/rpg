import type { Vector2 } from "../interfaces/Globals"

const GetDistance = (a: Vector2, b: Vector2) => Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2))
export default GetDistance