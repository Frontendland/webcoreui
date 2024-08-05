export const modal = (element: string) => {
    const htmlElement = document.querySelector(element) as HTMLElement

    if (htmlElement) {
        const handleClose = {
            icon: () => {
                const close = htmlElement.querySelector('[data-id="close"]')

                const listener = () => {
                    htmlElement.dataset.show = ''

                    close?.removeEventListener('click', listener)
                }

                close?.addEventListener('click', listener)
            },
    
            esc: () => {
                const listener = (event: KeyboardEvent) => {
                    if (event.key === 'Escape') {
                        htmlElement.dataset.show = ''

                        document.removeEventListener('keydown', listener)
                    }
                }

                document.addEventListener('keydown', listener)
            },
    
            overlay: () => {
                const close = htmlElement.nextElementSibling

                const listener = () => {
                    htmlElement.dataset.show = ''

                    close?.removeEventListener('click', listener)
                }

                close?.addEventListener('click', listener)
            }
        }

        const closeOptions = htmlElement.dataset.close?.split(',')

        htmlElement.dataset.show = 'true'

        closeOptions?.forEach(option => {
            handleClose[option as keyof typeof handleClose]()
        })
    }
}


export const closeModal = (element: string) => {
    const htmlElement = document.querySelector(element) as HTMLElement

    if (htmlElement) {
        htmlElement.dataset.show = ''
    }
}
