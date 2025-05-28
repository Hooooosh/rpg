
export class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    normalized(): Vector2 {
        const len = this.length();
        return len === 0 ? new Vector2(0, 0) : new Vector2(this.x / len, this.y / len);
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

    normalize() {
        const q = Math.max(this.x, this.y, this.z)
        this.x /= q
        this.y /= q
        this.z /= q
    }
}

export interface InventoryItem {
    id: number,
    amount: number,
}

