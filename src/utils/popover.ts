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

export type PopoverInstance = {
    close: () => void
    remove: () => void
}

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
}: Popover): PopoverInstance | undefined => {
    const triggerDOM = document.querySelector(trigger) as HTMLElement
    const popoverDOM = document.querySelector(popover) as HTMLElement

    if (triggerDOM && popoverDOM) {
        document.body.appendChild(popoverDOM)

        if (position) {
            popoverDOM.dataset.position = position.split('-')[0]
        }

        const getPosition = () => {
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

            let finalPosition = position || 'bottom'
            let { top, left } = positions[finalPosition]

            const viewportTop = window.scrollY
            const viewportBottom = window.scrollY + window.innerHeight
            const viewportLeft = 0
            const viewportRight = window.innerWidth

            const overflowsTop = top < viewportTop
            const overflowsBottom = top + popoverPosition.height > viewportBottom
            const overflowsLeft = left < viewportLeft
            const overflowsRight = left + popoverPosition.width > viewportRight

            if (finalPosition.startsWith('bottom') && overflowsBottom) {
                finalPosition = finalPosition.replace('bottom', 'top') as PopoverPosition
            } else if (finalPosition.startsWith('top') && overflowsTop) {
                finalPosition = finalPosition.replace('top', 'bottom') as PopoverPosition
            } else if (finalPosition.startsWith('right') && overflowsRight) {
                finalPosition = finalPosition.replace('right', 'left') as PopoverPosition
            } else if (finalPosition.startsWith('left') && overflowsLeft) {
                finalPosition = finalPosition.replace('left', 'right') as PopoverPosition
            }

            ({ top, left } = positions[finalPosition])

            top = Math.max(viewportTop, Math.min(top, viewportBottom - popoverPosition.height))
            left = Math.max(viewportLeft, Math.min(left, viewportRight - popoverPosition.width))

            popoverDOM.dataset.position = finalPosition.split('-')[0]

            return { top, left }
        }

        const handleOpen = () => {
            const { top, left } = getPosition()

            popoverDOM.dataset.noTransition = 'true'
            popoverDOM.style.top = `${top}px`
            popoverDOM.style.left = `${left}px`

            popoverDOM.getBoundingClientRect()
            popoverDOM.removeAttribute('data-no-transition')

            if (popoverDOM.dataset.show) {
                popoverDOM.removeAttribute('data-show')
            } else {
                popoverDOM.dataset.show = 'true'
            }

            onOpen?.({
                trigger: triggerDOM,
                popover: popoverDOM,
                position: popoverDOM.dataset.position as PopoverPosition
            })
        }

        const closePopover = () => {
            if (popoverDOM.dataset.show !== 'true') {
                return
            }

            popoverDOM.removeAttribute('data-show')

            const handleTransitionEnd = (e: TransitionEvent) => {
                if (e.target !== popoverDOM) {
                    return
                }

                popoverDOM.removeEventListener('transitionend', handleTransitionEnd)

                onClose?.({
                    trigger: triggerDOM,
                    popover: popoverDOM,
                    position: popoverDOM.dataset.position as PopoverPosition
                })
            }

            popoverDOM.addEventListener('transitionend', handleTransitionEnd)
        }

        const handleClose = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            const hidePopover = !popoverDOM.contains(target)
                && !triggerDOM.contains(target)
                && popoverDOM.dataset.show

            if (hidePopover) {
                closePopover()
            }
        }

        const handleCloseOnEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && popoverDOM.dataset.show) {
                closePopover()
            }
        }

        const removeOnResize = debounce(() => {
            closePopover()
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
            close() {
                closePopover()
            },
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
