import { clamp, interpolate, invlerp, lerp } from '@utils/interpolate'

import { describe, expect,it } from 'vitest'

describe('clamp', () => {
    it('should return the number if it is within the range', () => {
        expect(clamp(5, 1, 10)).toBe(5)
    })

    it('should return the minimum if the number is below the range', () => {
        expect(clamp(0, 1, 10)).toBe(1)
    })

    it('should return the maximum if the number is above the range', () => {
        expect(clamp(15, 1, 10)).toBe(10)
    })

    it('should handle edge cases where the number is equal to the min or max', () => {
        expect(clamp(1, 1, 10)).toBe(1)
        expect(clamp(10, 1, 10)).toBe(10)
    })
})

describe('lerp', () => {
    it('should interpolate correctly between two values', () => {
        expect(lerp(0, 10, 0.5)).toBe(5)
    })

    it('should return the start value when the factor is 0', () => {
        expect(lerp(0, 10, 0)).toBe(0)
    })

    it('should return the end value when the factor is 1', () => {
        expect(lerp(0, 10, 1)).toBe(10)
    })

    it('should handle extrapolation beyond the range', () => {
        expect(lerp(0, 10, -0.5)).toBe(-5)
        expect(lerp(0, 10, 1.5)).toBe(15)
    })
})

describe('invlerp', () => {
    it('should return the normalized position of a value in a range', () => {
        expect(invlerp(0, 10, 5)).toBe(0.5)
    })

    it('should clamp the output to 0 when the value is below the range', () => {
        expect(invlerp(0, 10, -5)).toBe(0)
    })

    it('should clamp the output to 1 when the value is above the range', () => {
        expect(invlerp(0, 10, 15)).toBe(1)
    })

    it('should handle edge cases where the value is equal to the start or end of the range', () => {
        expect(invlerp(0, 10, 0)).toBe(0)
        expect(invlerp(0, 10, 10)).toBe(1)
    })

    it('should handle inverted ranges', () => {
        expect(invlerp(10, 0, 5)).toBe(0.5)
    })
})

describe('interpolate', () => {
    it('should map a value from one range to another', () => {
        expect(interpolate(5, [0, 10], [0, 100])).toBe(50)
    })

    it('should handle edge cases where the value is equal to the start or end of the input range', () => {
        expect(interpolate(0, [0, 10], [0, 100])).toBe(0)
        expect(interpolate(10, [0, 10], [0, 100])).toBe(100)
    })

    it('should handle input ranges that are reversed', () => {
        expect(interpolate(5, [10, 0], [0, 100])).toBe(50)
    })

    it('should handle output ranges that are reversed', () => {
        expect(interpolate(5, [0, 10], [100, 0])).toBe(50)
    })

    it('should handle both input and output ranges being reversed', () => {
        expect(interpolate(5, [10, 0], [100, 0])).toBe(50)
    })

    it('should handle values outside the input range', () => {
        expect(interpolate(-5, [0, 10], [0, 100])).toBe(0)
        expect(interpolate(15, [0, 10], [0, 100])).toBe(100)
    })
})
