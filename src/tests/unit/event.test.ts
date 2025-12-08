import { dispatch, listen } from '@utils/event'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('event', () => {
    const eventName = 'test-event'
    const eventDetail = { message: 'Hello' }

    let mockCallback: (e: any) => void

    beforeEach(() => {
        mockCallback = vi.fn()

        vi.spyOn(document, 'addEventListener')
        vi.spyOn(document, 'dispatchEvent')
        vi.spyOn(document, 'removeEventListener')
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    describe('dispatch', () => {
        it('should dispatch a custom event with the correct detail', () => {
            dispatch(eventName, eventDetail)

            expect(document.dispatchEvent).toHaveBeenCalledWith(expect.objectContaining({
                type: eventName,
                detail: eventDetail
            }))
        })
    })

    describe('listen', () => {
        it('should add an event listener to the document', () => {
            const { remove } = listen(eventName, mockCallback)

            // Verify addEventListener was called
            expect(document.addEventListener).toHaveBeenCalledWith(eventName, expect.any(Function))

            // Trigger the event
            dispatch(eventName, eventDetail)

            // Verify that the callback was called with the correct detail
            expect(mockCallback).toHaveBeenCalledWith(eventDetail)

            // Cleanup by removing the listener
            remove()

            // Verify removeEventListener was called
            expect(document.removeEventListener).toHaveBeenCalledWith(eventName, expect.any(Function))
        })

        it('should not call the callback after the event listener is removed', () => {
            const { remove } = listen(eventName, mockCallback)

            dispatch(eventName, eventDetail)

            expect(mockCallback).toHaveBeenCalledWith(eventDetail)

            remove()

            // Trigger the event again
            dispatch(eventName, eventDetail)

            // Verify the callback was not called again after removal
            expect(mockCallback).toHaveBeenCalledTimes(1) // Still called once
        })
    })
})
