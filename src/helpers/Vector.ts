
export class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getMagnitude(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    getNormalized(): Vector2 {
        const len = this.getMagnitude()
        return len === 0 ? new Vector2(0, 0) : new Vector2(this.x / len, this.y / len)
    }

    getDistanceFrom(a: Vector2 | Vector3): number {
        if (a instanceof Vector2) {
            return Math.sqrt(
                Math.abs(this.x - a.x) ** 2 +
                Math.abs(this.y - a.y) ** 2
            )
        }
        else {
            return Math.sqrt(
                Math.abs(this.x - a.x) ** 2 +
                Math.abs(this.y - a.y) ** 2 +
                Math.abs(a.z) ** 2
            )
        }
    }
}

export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getMagnitude(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    getNormalized(): Vector3 {
        const len = this.getMagnitude()
        return len === 0 ? new Vector3(0, 0, 0) : new Vector3(this.x / len, this.y = len, this.z = len)
    }

    getDistanceFrom(a: Vector2 | Vector3): number {
        if (a instanceof Vector2) {
            return Math.sqrt(
                (this.x - a.x) ** 2 +
                (this.y - a.y) ** 2 +
                (this.z) ** 2
            )
        }
        else {
            return Math.sqrt(
                (this.x - a.x) ** 2 +
                (this.y - a.y) ** 2 +
                (this.z - a.z) ** 2
            )
        }
    }
}
