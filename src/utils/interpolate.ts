export const clamp = (
    num: number,
    min: number,
    max: number
) => Math.min(Math.max(num, min), max)
    
export const lerp = (
    x: number,
    y: number,
    z: number
) => x * (1 - z) + y * z
        
export const invlerp = (
    x: number,
    y: number,
    z: number
) => clamp((z - x) / (y - x), 0, 1)
    
export const interpolate = (
    value: number,
    input: [x: number, y: number],
    output: [x: number, y: number],
) => lerp(output[0], output[1], invlerp(input[0], input[1], value))
