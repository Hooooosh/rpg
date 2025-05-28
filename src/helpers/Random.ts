
export function RandomInt(max: number): number {
    max = Math.floor(max)
    return Math.floor(Math.random() * max + 1);
}

export function RandomIntBetween(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(min + Math.random() * (max - min + 1));
}

