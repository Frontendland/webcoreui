import { isOneOf } from './isOneOf'

const breakpoints = ['xs', 'sm', 'md', 'lg'] as const

export type Breakpoint = typeof breakpoints[number]

export const getBreakpoint = (): Breakpoint => {
    const value = getComputedStyle(document.documentElement)
        .getPropertyValue('--w-breakpoint')
        .trim()

    if (isOneOf<Breakpoint>(breakpoints)(value)) {
        return value
    }

    throw new Error(`Unexpected breakpoint: ${value}`)
}
