import { isOneOf } from '@utils/isOneOf'

import { describe, expect, it } from 'vitest'

describe('isOneOf', () => {
    it('should return true for a value that exists in the list', () => {
        const isColor = isOneOf(['red', 'green', 'blue'])

        expect(isColor('red')).toBe(true)
        expect(isColor('green')).toBe(true)
        expect(isColor('blue')).toBe(true)
    })

    it('should return false for a value not in the list', () => {
        const isColor = isOneOf(['red', 'green', 'blue'])

        expect(isColor('yellow')).toBe(false)
        expect(isColor('purple')).toBe(false)
        expect(isColor('')).toBe(false)
    })

    it('should work with a single value list', () => {
        const isYes = isOneOf(['yes'])

        expect(isYes('yes')).toBe(true)
        expect(isYes('no')).toBe(false)
    })

    it('should return false for any value when list is empty', () => {
        const isNothing = isOneOf([])

        expect(isNothing('anything')).toBe(false)
        expect(isNothing('')).toBe(false)
    })

    it('should properly narrow types when used in conditions', () => {
        const isDirection = isOneOf(['up', 'down'])
        const input = 'up' as string

        if (isDirection(input)) {
            // Inside this block, input should be typed as "up" | "down"
            const direction: 'up' | 'down' = input

            expect(['up', 'down']).toContain(direction)
        }
    })
})
