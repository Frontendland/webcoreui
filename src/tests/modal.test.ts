import { closeModal, modal } from '@utils/modal'

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('modal', () => {
    let modalElement: HTMLElement
    let triggerElement: HTMLElement
    let overlayElement: HTMLElement
    let closeIconElement: HTMLElement

    beforeEach(() => {
        document.body.innerHTML = `
            <button id="trigger">Open Modal</button>
            <div id="modal" data-close="icon,esc,overlay">
                <button data-id="close">Close</button>
            </div>
            <div class="overlay"></div>
        `

        triggerElement = document.getElementById('trigger')!
        modalElement = document.getElementById('modal')!
        overlayElement = document.querySelector('.overlay')!
        closeIconElement = document.querySelector('[data-id="close"]')!
    })

    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('should open modal when trigger is clicked', () => {
        modal({
            trigger: '#trigger',
            modal: '#modal'
        })

        triggerElement.click()
        expect(modalElement.dataset.show).toBe('true')
    })

    it('should close modal when close icon is clicked', () => {
        const onClose = vi.fn()

        modal({
            trigger: '#trigger',
            modal: '#modal',
            onClose
        })

        triggerElement.click()
        closeIconElement.click()

        expect(modalElement.dataset.show).toBe('')
        expect(onClose).toHaveBeenCalledWith({
            trigger: triggerElement,
            modal: modalElement
        })
    })

    it('should close modal when ESC key is pressed', () => {
        const onClose = vi.fn()

        modal({
            trigger: '#trigger',
            modal: '#modal',
            onClose
        })

        triggerElement.click()

        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        document.dispatchEvent(event)

        expect(modalElement.dataset.show).toBe('')
        expect(onClose).toHaveBeenCalledWith({
            trigger: triggerElement,
            modal: modalElement
        })
    })

    it('should close modal when overlay is clicked', () => {
        const onClose = vi.fn()

        modal({
            trigger: '#trigger',
            modal: '#modal',
            onClose
        })

        overlayElement.click()

        expect(modalElement.dataset.show).toBe('')
        expect(onClose).toHaveBeenCalledWith({
            trigger: triggerElement,
            modal: modalElement
        })
    })

    it('should call onOpen when modal is opened', () => {
        const onOpen = vi.fn()

        modal({
            trigger: '#trigger',
            modal: '#modal',
            onOpen
        })

        triggerElement.click()

        expect(modalElement.dataset.show).toBe('true')
        expect(onOpen).toHaveBeenCalledWith({
            trigger: triggerElement,
            modal: modalElement
        })
    })

    it('should remove all event listeners on remove', () => {
        const { remove } = modal({
            trigger: '#trigger',
            modal: '#modal'
        }) as { remove(): void }

        remove()

        triggerElement.click()
        expect(modalElement.dataset.show).toBeUndefined()
    })
})

describe('closeModal', () => {
    let modalElement: HTMLElement

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="modal" data-show="true"></div>
        `

        modalElement = document.getElementById('modal')!
    })

    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('should hide the modal', () => {
        expect(modalElement.dataset.show).toBe('true')

        closeModal('#modal')
        expect(modalElement.dataset.show).toBe('')
    })

    it('should do nothing if modal does not exist', () => {
        expect(() => closeModal('#nonexistent')).not.toThrow()
    })
})
