import { get, on } from '@utils/DOMUtils'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('DOMUtils', () => {
    let mockElement: HTMLElement
    let mockElements: NodeListOf<HTMLElement>

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="test-element">
                <div data-id="title">Test Title</div>
                <div data-id="body">Test Content</div>
            </div>
            <div class="test-elements">
                <div data-id="title">Element 1</div>
                <div data-id="body">Content 1</div>
            </div>
            <div class="test-elements">
                <div data-id="title">Element 2</div>
                <div data-id="body">Content 2</div>
            </div>
        `

        mockElement = document.querySelector('#test-element') as HTMLElement
        mockElements = document.querySelectorAll('.test-elements') as NodeListOf<HTMLElement>

        vi.spyOn(mockElement, 'addEventListener')

        mockElements.forEach(element => {
            vi.spyOn(element, 'addEventListener')
        })
    })

    afterEach(() => {
        document.body.innerHTML = ''
        vi.restoreAllMocks()
    })

    describe('get function', () => {
        it('should return a single element when "all" is not provided', () => {
            const result = get('#test-element')
            const element = document.querySelector('#test-element')

            expect(result).toBe(element)
        })

        it('should return multiple elements when "all" is true', () => {
            const result = get('.test-elements', true)
            const elements = document.querySelectorAll('.test-elements')

            expect(result).toEqual(elements)
        })
    })

    describe('on function', () => {
        it('should add an event listener to a single element when "all" is not provided', () => {
            const callback = vi.fn()

            on('#test-element', 'click', callback)

            expect(mockElement.addEventListener).toHaveBeenCalledWith('click', callback)

            mockElement.dispatchEvent(new Event('click'))
            expect(callback).toHaveBeenCalled()
        })

        it('should add event listeners to multiple elements when "all" is true', () => {
            const callback = vi.fn()

            on('.test-elements', 'click', callback, true)

            mockElements.forEach(element => {
                expect(element.addEventListener).toHaveBeenCalledWith('click', callback)
            })

            mockElements[0].dispatchEvent(new Event('click'))
            expect(callback).toHaveBeenCalled()

            mockElements[1].dispatchEvent(new Event('click'))
            expect(callback).toHaveBeenCalledTimes(2)
        })

        it('should do nothing if the element is not found in get (single element)', () => {
            const callback = vi.fn()

            on('#nonexistent-element', 'click', callback)

            expect(callback).not.toHaveBeenCalled()
        })

        it('should do nothing if no elements are found in querySelectorAll (multiple elements)', () => {
            const callback = vi.fn()

            on('.nonexistent-elements', 'click', callback, true)

            expect(callback).not.toHaveBeenCalled()
        })
    })
})
