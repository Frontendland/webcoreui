import { debounce } from './debounce'
import { closeModal } from './modal'

export type PopoverPosition = 'top'
    | 'top-start'
    | 'top-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'

export type PopoverCallback = {
    trigger: HTMLElement
    popover: HTMLElement
    position: PopoverPosition | undefined
}

export type Popover = {
    trigger: string
    popover: string
    position?: PopoverPosition
    offset?: number
    closeOnBlur?: boolean
    closeOnEsc?: boolean
    onOpen?: (args: PopoverCallback) => unknown
    onClose?: (args: PopoverCallback) => unknown
}

export const popover = ({
    trigger,
    popover,
    position,
    offset = 10,
    closeOnBlur = true,
    closeOnEsc = true,
    onOpen,
    onClose
}: Popover) => {
    const triggerDOM = document.querySelector(trigger) as HTMLElement
    const popoverDOM = document.querySelector(popover) as HTMLElement

    if (triggerDOM && popoverDOM) {
        document.body.appendChild(popoverDOM)

        if (position) {
            popoverDOM.dataset.position = position.split('-')[0]
        }

        const handleOpen = () => {
            const triggerPosition = triggerDOM.getBoundingClientRect()
            const popoverPosition = popoverDOM.getBoundingClientRect()

            const topSide = triggerPosition.top
                + window.scrollY
                - popoverPosition.height
                - offset

            const bottomSide = triggerPosition.top
                + window.scrollY
                + triggerPosition.height
                + offset

            const leftSide = triggerPosition.left
                - popoverPosition.width
                - offset

            const rightSide = triggerPosition.left
                + triggerPosition.width
                + offset

            const hcenter = triggerPosition.left
                - ((popoverPosition.width - triggerPosition.width) / 2)

            const hEnd = triggerPosition.left
                - (popoverPosition.width - triggerPosition.width)

            const vcenter = triggerPosition.top
                + window.scrollY
                - ((popoverPosition.height - triggerPosition.height) / 2)

            const vStart = triggerPosition.top + window.scrollY
            const vEnd = triggerPosition.top
                + window.scrollY
                - (popoverPosition.height - triggerPosition.height)

            const positions = {
                'top-start': {
                    top: topSide,
                    left: triggerPosition.left
                },
                'top': {
                    top: topSide,
                    left: hcenter
                },
                'top-end': {
                    top: topSide,
                    left: hEnd
                },
                'left-start': {
                    top: vStart,
                    left: leftSide
                },
                'left': {
                    top: vcenter,
                    left: leftSide
                },
                'left-end': {
                    top: vEnd,
                    left: leftSide
                },
                'right-start': {
                    top: vStart,
                    left: rightSide
                },
                'right': {
                    top: vcenter,
                    left: rightSide
                },
                'right-end': {
                    top: vEnd,
                    left: rightSide
                },
                'bottom-start': {
                    top: bottomSide,
                    left: triggerPosition.left
                },
                'bottom': {
                    top: bottomSide,
                    left: hcenter
                },
                'bottom-end': {
                    top: bottomSide,
                    left: hEnd
                }
            }

            const { top, left } = positions[position as keyof typeof positions] || positions.bottom

            popoverDOM.style.top = `${top}px`
            popoverDOM.style.left = `${left}px`

            setTimeout(() => {
                popoverDOM.dataset.show = popoverDOM.dataset.show === 'true'
                    ? ''
                    : 'true'
            }, 0)

            setTimeout(() => {
                if (!popoverDOM.dataset.show) {
                    popoverDOM.removeAttribute('data-show')
                }
            }, 300)

            onOpen?.({
                trigger: triggerDOM,
                popover: popoverDOM,
                position
            })
        }

        const handleClose = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            const hidePopover = !popoverDOM.contains(target)
                && !triggerDOM.contains(target)
                && popoverDOM.dataset.show

            if (hidePopover) {
                popoverDOM.dataset.show = ''

                onClose?.({
                    trigger: triggerDOM,
                    popover: popoverDOM,
                    position
                })
            }

            setTimeout(() => {
                if (!popoverDOM.dataset.show) {
                    popoverDOM.removeAttribute('data-show')
                }
            }, 300)
        }

        const handleCloseOnEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && popoverDOM.dataset.show) {
                popoverDOM.dataset.show = ''

                onClose?.({
                    trigger: triggerDOM,
                    popover: popoverDOM,
                    position
                })

                setTimeout(() => {
                    popoverDOM.removeAttribute('data-show')
                }, 300)
            }
        }

        const removeOnResize = debounce(() => {
            popoverDOM.dataset.show = ''

            setTimeout(() => {
                if (!popoverDOM.dataset.show) {
                    popoverDOM.removeAttribute('data-show')
                }
            }, 300)
        })

        const observer = new ResizeObserver(() => {
            if (popoverDOM.dataset.show) {
                removeOnResize()
            }
        })

        triggerDOM.addEventListener('click', handleOpen)
        observer.observe(document.body)

        if (closeOnBlur) {
            document.addEventListener('click', handleClose)
        }

        if (closeOnEsc) {
            document.addEventListener('keydown', handleCloseOnEsc)
        }

        return {
            remove() {
                popoverDOM.remove()
                triggerDOM.removeEventListener('click', handleOpen)
                observer.disconnect()

                if (closeOnBlur) {
                    document.removeEventListener('click', handleClose)
                }

                if (closeOnEsc) {
                    document.removeEventListener('keydown', handleCloseOnEsc)
                }
            }
        }
    }
}

export const closePopover = closeModal
