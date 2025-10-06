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
