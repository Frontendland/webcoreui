import { bodyFreeze } from '@utils/bodyFreeze'

import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi
} from 'vitest'

describe('bodyFreeze', () => {
    beforeEach(() => {
        document.body.style.paddingRight = ''
        document.body.style.overflow = ''

        vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)
        Object.defineProperty(document.body, 'clientWidth', {
            configurable: true,
            get: vi.fn(() => 1000)
        })

        // @ts-expect-error missing property
        globalThis.setTimeout = vi.fn((fn, _) => fn())
    })

    afterEach(() => {
        vi.restoreAllMocks()

        document.body.style.paddingRight = ''
        document.body.style.overflow = ''
    })

    it('should freeze the body (hide overflow and set padding)', () => {
        bodyFreeze(true)

        expect(document.body.style.overflow).toBe('hidden')
        expect(document.body.style.paddingRight).toBe('24px') // 1024 - 1000 = 24
    })

    it('should unfreeze the body (reset styles) when freeze is false', () => {
        bodyFreeze(true)
        expect(document.body.style.overflow).toBe('hidden')

        bodyFreeze(false)

        expect(document.body.style.overflow).toBe('')
        expect(document.body.style.paddingRight).toBe('')
    })

    it('should freeze the body by default when no arguments are passed', () => {
        bodyFreeze()

        expect(document.body.style.overflow).toBe('hidden')
        expect(document.body.style.paddingRight).toBe('24px')
    })
})
