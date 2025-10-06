import { type Breakpoint, getBreakpoint } from '@utils/getBreakpoint'

import { beforeEach,describe, expect, it, vi } from 'vitest'

describe('getBreakpoint', () => {
    const mockGetComputedStyle = vi.fn()

    beforeEach(() => {
        vi.resetAllMocks()
        global.getComputedStyle = mockGetComputedStyle
    })

    const mockBreakpoint = (value: string) => {
        mockGetComputedStyle.mockReturnValue({
            getPropertyValue: vi.fn().mockReturnValue(value)
        })
    }

    it.each<Breakpoint>(['xs', 'sm', 'md', 'lg'])('should return %s when --w-breakpoint is set', bp => {
        mockBreakpoint(bp)
        expect(getBreakpoint()).toBe(bp)
    })

    it('should trim whitespace around the breakpoint value', () => {
        mockBreakpoint('  md  ')
        expect(getBreakpoint()).toBe('md')
    })

    it('should throw an error if the breakpoint is unexpected', () => {
        mockBreakpoint('xxl')
        expect(() => getBreakpoint()).toThrowError(/Unexpected breakpoint: xxl/)
    })

    it('should throw an error if breakpoint is empty string', () => {
        mockBreakpoint('   ')
        expect(() => getBreakpoint()).toThrowError(/Unexpected breakpoint:/)
    })
})
