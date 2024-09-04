export const utilityTypes = `
type ModalCallback = {
    trigger: Element | null
    modal: HTMLElement
}

type Modal = {
    trigger: string
    modal: string
    onOpen?: (args: ModalCallback) => unknown
    onClose?: (args: ModalCallback) => unknown
}

type PopoverPosition = 'top'
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

type PopoverCallback = {
    trigger: HTMLElement
    popover: HTMLElement
    position: PopoverPosition | undefined
}

type Popover = {
    trigger: string
    popover: string
    position?: PopoverPosition
    offset?: number
    closeOnBlur?: boolean
    onOpen?: (args: PopoverCallback) => unknown
    onClose?: (args: PopoverCallback) => unknown
}

type Toast = {
    element: string
    timeout?: number
    title?: string
    content?: string
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
        | null
}

declare module 'webcoreui' {
    export const classNames: (classes: any[]) => string

    export const setCookie: (name: string, value: string, days: number) => undefined
    export const getCookie: (name: string) => string | null
    export const removeCookie: (name: string) => void

    export const debounce: <T extends (...args: any[]) => any>(
        fn: T,
        waitFor?: number
    ) => {
        (...args: Parameters<T>): void
        cancel: () => void
    }

    export const dispatch: (event: string, detail: unknown) => void
    export const listen: (event: string, callback: (e: any) => unknown) => {
        remove: () => void
    }

    export const clamp: (num: number, min: number, max: number) => number
    export const lerp: (start: number, end: number, value: number) => number
    export const invlerp: (start: number, end: number, value: number) => number
    export const interpolate: (
        value: number,
        input: [start: number, end: number],
        output: [start: number, end: number]
    ) => number

    export const modal: (config: Modal | string) => {
        open: () => void
        remove: () => void
    } | void
    export const closeModal: (modal: string) => void

    export const popover: (config: Popover) => {
        remove: () => void
    } | void
    export const closePopover: (selector: string) => void

    export const setDefaultTimeout: (time: number) => number
    export const toast: (config: Toast | string) => void
    export const hideToast: (element: string) => void
}
`
