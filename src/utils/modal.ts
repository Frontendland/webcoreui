import { bodyFreeze } from './bodyFreeze'

export type ModalInstance = {
    open: (freeze?: boolean) => void
    close: () => void
    replaceWith: (modal: ModalInstance) => void
    remove: () => void
}

export type ModalCallback = {
    trigger: Element | null
    modal: HTMLElement
}

export type Modal = {
    trigger?: string
    modal: string
    onOpen?: (args: ModalCallback) => unknown
    onClose?: (args: ModalCallback) => unknown
}

export const modal = (config: Modal | string): ModalInstance | undefined => {
    const {
        trigger,
        modal,
        onOpen,
        onClose
    } = (typeof config === 'string' ? {} : config) as Modal

    const modalSelector = typeof config === 'string' ? config : modal

    const triggerDOM = trigger ? document.querySelector(trigger) : null
    const modalDOM = document.querySelector(modalSelector)

    if (modalDOM instanceof HTMLElement) {
        const closeOptions = modalDOM.dataset.close?.split(',')

        const handleOpen = (_e?: Event, freeze = true) => {
            modalDOM.dataset.show = 'true'

            if (freeze) {
                bodyFreeze()
            }

            onOpen?.({
                trigger: triggerDOM,
                modal: modalDOM
            })
        }

        const handleClose = (_e?: Event, unfreeze = true) => {
            modalDOM.dataset.show = ''

            if (unfreeze) {
                bodyFreeze(false)
            }

            onClose?.({
                trigger: triggerDOM,
                modal: modalDOM
            })
        }

        const closeHandlers = {
            icon() {
                const close = modalDOM.querySelector('[data-id="close"]')

                return {
                    add: () => close?.addEventListener('click', handleClose),
                    remove: () => close?.removeEventListener('click', handleClose)
                }
            },

            esc() {
                const listener = (event: KeyboardEvent) => {
                    if (modalDOM.dataset.show && event.key === 'Escape') {
                        handleClose()
                    }
                }

                return {
                    add: () => document.addEventListener('keydown', listener),
                    remove: () => document.removeEventListener('keydown', listener)
                }
            },

            overlay() {
                const close = modalDOM.nextElementSibling

                return {
                    add: () => close?.addEventListener('click', handleClose),
                    remove: () => close?.removeEventListener('click', handleClose)
                }
            }
        }

        triggerDOM?.addEventListener('click', handleOpen)

        closeOptions?.forEach(option => {
            closeHandlers[option as keyof typeof closeHandlers]().add()
        })

        return {
            open(freeze?: boolean) {
                handleOpen(undefined, freeze)
            },
            close() {
                handleClose()
            },
            replaceWith(modal: ModalInstance) {
                modal.open(false)
                handleClose(undefined, false)
            },
            remove() {
                triggerDOM?.removeEventListener('click', handleOpen)

                closeOptions?.forEach(option => {
                    closeHandlers[option as keyof typeof closeHandlers]().remove()
                })
            }
        }
    }
}

export const closeModal = (modal: string) => {
    const modalDOM = document.querySelector(modal)

    if (modalDOM instanceof HTMLElement) {
        modalDOM.dataset.show = ''

        bodyFreeze(false)
    }
}
