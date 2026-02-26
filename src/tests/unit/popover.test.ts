import { closePopover, popover } from '@utils/popover'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@utils/debounce', () => ({
    debounce: vi.fn((fn) => fn)
}))

describe('popover', () => {
    let triggerElement: HTMLElement
    let popoverElement: HTMLElement

    beforeEach(() => {
        vi.stubGlobal('ResizeObserver', class {
            observe = vi.fn()
            disconnect = vi.fn()
        })

        document.body.innerHTML = `
            <button id="trigger">Open Popover</button>
            <div id="popover" data-show=""></div>
        `

        triggerElement = document.getElementById('trigger')!
        popoverElement = document.getElementById('popover')!
    })

    afterEach(() => {
        document.body.innerHTML = ''
        vi.restoreAllMocks()
    })

    it('should return undefined if trigger or popover does not exist', () => {
        const instance = popover({
            trigger: '#missing',
            popover: '#popover'
        })

        expect(instance).toBeUndefined()
    })

    it('should position and show the popover on trigger click', () => {
        const onOpen = vi.fn()

        popover({
            trigger: '#trigger',
            popover: '#popover',
            position: 'bottom',
            onOpen
        })

        triggerElement.click()

        expect(popoverElement.style.top).not.toBe('')
        expect(popoverElement.style.left).not.toBe('')

        expect(onOpen).toHaveBeenCalledWith({
            trigger: triggerElement,
            popover: popoverElement,
            position: 'bottom'
        })
    })

    it('should close popover using instance.close()', () => {
        const onClose = vi.fn()
        const instance = popover({
            trigger: '#trigger',
            popover: '#popover',
            onClose
        })!

        triggerElement.click()
        instance.close()

        popoverElement.dispatchEvent(
            new TransitionEvent('transitionend', { bubbles: true })
        )

        expect(popoverElement.dataset.show).toBe(undefined)
        expect(onClose).toHaveBeenCalledWith({
            trigger: triggerElement,
            popover: popoverElement,
            position: 'bottom'
        })
    })

    it('should remove click listener on destroy()', () => {
        const instance = popover({
            trigger: '#trigger',
            popover: '#popover'
        })!

        instance.destroy()
        triggerElement.click()

        expect(popoverElement.dataset.show).toBe('')
    })

    it('should remove popover DOM on remove()', () => {
        const instance = popover({
            trigger: '#trigger',
            popover: '#popover'
        })!

        instance.remove()

        expect(document.getElementById('popover')).toBeNull()
    })

    it('should close when clicking outside if closeOnBlur is true', () => {
        popover({
            trigger: '#trigger',
            popover: '#popover',
            closeOnBlur: true
        })

        triggerElement.click()
        document.body.click()

        expect(popoverElement.dataset.show).toBe(undefined)
    })

    it('should close when pressing Escape if closeOnEsc is true', () => {
        popover({
            trigger: '#trigger',
            popover: '#popover',
            closeOnEsc: true
        })

        triggerElement.click()

        document.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Escape' })
        )

        expect(popoverElement.dataset.show).toBe(undefined)
    })

    it('should not close on blur if closeOnBlur is false', () => {
        popover({
            trigger: '#trigger',
            popover: '#popover',
            closeOnBlur: false
        })

        triggerElement.click()
        document.body.click()

        expect(popoverElement.dataset.show).toBe('true')
    })

    it('should flip position when overflowing viewport', () => {
        vi.spyOn(triggerElement, 'getBoundingClientRect').mockReturnValue({
            top: window.innerHeight - 10,
            left: 0,
            width: 100,
            height: 50,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
            toJSON: () => {}
        } as DOMRect)

        vi.spyOn(popoverElement, 'getBoundingClientRect').mockReturnValue({
            width: 200,
            height: 200,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
            toJSON: () => {}
        } as DOMRect)

        popover({
            trigger: '#trigger',
            popover: '#popover',
            position: 'bottom'
        })

        triggerElement.click()

        expect(popoverElement.dataset.position).toBe('top')
    })
})

describe('closePopover', () => {
    let popoverElement: HTMLElement

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="popover" data-show="true"></div>
        `

        popoverElement = document.getElementById('popover')!
    })

    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('should hide the popover', () => {
        closePopover('#popover')
        expect(popoverElement.dataset.show).toBe('')
    })

    it('should do nothing if the popover does not exist', () => {
        expect(() => closePopover('#nonexistent')).not.toThrow()
    })
})
