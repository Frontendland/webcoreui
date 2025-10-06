import { debounce } from '@utils/debounce'

import { beforeEach,describe, expect, it, vi } from 'vitest'

describe('debounce', () => {
    let mockFn: ReturnType<typeof vi.fn>
    let debouncedFn: ReturnType<typeof debounce>

    beforeEach(() => {
        mockFn = vi.fn()
        debouncedFn = debounce(mockFn, 200)
    })

    it('should call the function after the specified delay', async () => {
        debouncedFn()
        expect(mockFn).not.toHaveBeenCalled()

        vi.advanceTimersByTime(200)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should not call the function if canceled before the delay', async () => {
        debouncedFn()
        debouncedFn.cancel()

        vi.advanceTimersByTime(200)
        expect(mockFn).not.toHaveBeenCalled()
    })

    it('should reset the delay if called multiple times in quick succession', async () => {
        debouncedFn()
        vi.advanceTimersByTime(100)
        debouncedFn() // Call again before the delay completes

        // Advance timers by 100ms (total: 200ms from the first call)
        vi.advanceTimersByTime(100)
        expect(mockFn).not.toHaveBeenCalled()

        // Advance timers by another 100ms (now 200ms after the second call)
        vi.advanceTimersByTime(100)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should pass arguments to the debounced function', async () => {
        debouncedFn('arg1', 'arg2')
        vi.advanceTimersByTime(200)

        expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2')
    })

    it('should allow setting a custom wait time', async () => {
        const shortDebounce = debounce(mockFn, 50)
        shortDebounce()

        vi.advanceTimersByTime(50)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should handle multiple calls with cancel between them', async () => {
        debouncedFn()
        debouncedFn.cancel()

        debouncedFn()
        vi.advanceTimersByTime(200)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })

    it('should handle no delay (waitFor = 0)', async () => {
        const immediateDebounce = debounce(mockFn, 0)
        immediateDebounce()
        expect(mockFn).not.toHaveBeenCalled()

        vi.advanceTimersByTime(0)
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})
