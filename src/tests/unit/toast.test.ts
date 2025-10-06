import {
    hideToast,
    setDefaultTimeout,
    toast
} from '@utils/toast'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('toast', () => {
    let mockTimeout: any

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="toast">
                <div data-id="title"></div>
                <div data-id="body"></div>
            </div>
        `

        mockTimeout = vi.fn((fn, _) => fn())
        globalThis.setTimeout = mockTimeout
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    describe('toast init', () => {
        it('should update the title, content, and position of the toast', () => {
            toast({
                element: '#toast',
                title: 'Test Title',
                content: 'Test content',
                position: 'top-right'
            })

            const toastElement = document.querySelector('#toast') as HTMLElement
            expect(toastElement.dataset.position).toBe('top-right')

            const titleElement = toastElement.querySelector('[data-id="title"]') as HTMLElement
            expect(titleElement.innerHTML).toBe('Test Title')

            const contentElement = toastElement.querySelector('[data-id="body"]') as HTMLElement
            expect(contentElement.innerHTML).toBe('Test content')

            // Check if the second setTimeout call (hide the toast) is executed
            expect(mockTimeout).toHaveBeenCalledTimes(2)
        })

        it('should use the default timeout if not specified', () => {
            toast({
                element: '#toast',
                title: 'Test Title'
            })

            expect(mockTimeout).toHaveBeenCalledWith(expect.any(Function), 5000)
        })

        it('should use a custom timeout if specified', () => {
            toast({
                element: '#toast',
                title: 'Test Title',
                timeout: 2000
            })

            expect(mockTimeout).toHaveBeenCalledWith(expect.any(Function), 2000)
        })
    })

    describe('hideToast', () => {
        it('should hide the toast by removing the "show" dataset', () => {
            const toastElement = document.querySelector('#toast') as HTMLElement
            toastElement.dataset.show = 'true'

            hideToast('#toast')

            expect(toastElement.dataset.show).toBe('')
        })
    })

    describe('setDefaultTimeout', () => {
        it('should change the default timeout value', () => {
            setDefaultTimeout(3000)

            toast({ element: '#toast', title: 'Test Title' })

            expect(mockTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
        })
    })
})
