export type ModalCallback = {
    trigger: Element | null
    modal: HTMLElement
}

export type Modal = {
    trigger: string
    modal: string
    onOpen?: (args: ModalCallback) => unknown
    onClose?: (args: ModalCallback) => unknown
}

export const modal = (config: Modal | string) => {
    const {
        trigger,
        modal,
        onOpen,
        onClose
    } = (typeof config === 'string' ? {} : config) as Modal

    const modalSelector = typeof config === 'string' ? config : modal

    const triggerDOM = document.querySelector(trigger)
    const modalDOM = document.querySelector(modalSelector) as HTMLElement

    if (modalDOM) {
        const closeOptions = modalDOM.dataset.close?.split(',')

        const handleClose = {
            icon() {
                const close = modalDOM.querySelector('[data-id="close"]')

                const listener = () => {
                    modalDOM.dataset.show = ''

                    onClose?.({
                        trigger: triggerDOM,
                        modal: modalDOM
                    })
                }

                return {
                    add: () => close?.addEventListener('click', listener),
                    remove: () => close?.removeEventListener('click', listener)
                }
            },

            esc() {
                const listener = (event: KeyboardEvent) => {
                    if (modalDOM.dataset.show && event.key === 'Escape') {
                        modalDOM.dataset.show = ''

                        onClose?.({
                            trigger: triggerDOM,
                            modal: modalDOM
                        })

                    }
                }

                return {
                    add: () => document.addEventListener('keydown', listener),
                    remove: () => document.removeEventListener('keydown', listener)
                }
            },

            overlay() {
                const close = modalDOM.nextElementSibling

                const listener = () => {
                    modalDOM.dataset.show = ''

                    onClose?.({
                        trigger: triggerDOM,
                        modal: modalDOM
                    })
                }

                return {
                    add: () => close?.addEventListener('click', listener),
                    remove: () => close?.removeEventListener('click', listener)
                }
            }
        }

        const handleOpen = () => {
            modalDOM.dataset.show = 'true'

            onOpen?.({
                trigger: triggerDOM,
                modal: modalDOM
            })
        }

        triggerDOM?.addEventListener('click', handleOpen)

        closeOptions?.forEach(option => {
            handleClose[option as keyof typeof handleClose]().add()
        })

        return {
            open() {
                handleOpen()
            },
            remove() {
                triggerDOM?.removeEventListener('click', handleOpen)

                closeOptions?.forEach(option => {
                    handleClose[option as keyof typeof handleClose]().remove()
                })
            }
        }
    }
}

export const closeModal = (modal: string) => {
    const modalDOM = document.querySelector(modal) as HTMLElement

    if (modalDOM) {
        modalDOM.dataset.show = ''
    }
}
