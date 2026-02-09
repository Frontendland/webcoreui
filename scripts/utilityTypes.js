export const utilityTypes = `
export type Breakpoint = 'xs'
    | 'sm'
    | 'md'
    | 'lg'

export type Gap = 'none'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'default'
    | 'lg'
    | 'xl'
    | 'xl2'
    | 'xl3'
    | 'xl4'
    | 'xl5'
    | ''

export type VerticalAlignment = 'center'
    | 'start'
    | 'end'
    | 'baseline'
    | 'stretch'
    | ''

export type HorizontalAlignment = 'center'
    | 'start'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
    | ''

export type Direction = 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | ''

export type Wrap = 'wrap'
    | 'nowrap'
    | 'wrap-reverse'
    | ''

export type Column = (2 | 3) | {
    default?: 2 | 3
    xs?: 2 | 3 | 4
    sm?: 2 | 3 | 4
    md?: 2 | 3 | 4 | 5 | 6
    lg?: 2 | 3 | 4 | 5 | 6 | 7 | 8
} | null

export type Responsive<T> = T | {
    default?: T
    xs?: T
    sm?: T
    md?: T
    lg?: T
}

export type Alignment = {
    horizontal?: HorizontalAlignment
    vertical?: VerticalAlignment
}

export type getLayoutClassesConfig = {
    gap?: Responsive<Gap>
    alignment?: Responsive<Alignment>
    direction?: Responsive<Direction>
    wrap?: Responsive<Wrap>
}

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

export type Toast = {
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
    export const bodyFreeze: (freeze: boolean) => void
    export const classNames: (classes: any[]) => string
    export const closeContext: (ctx: string | HTMLElement) => void

    export const setCookie: (name: string, value: string, days: number) => void
    export const getCookie: (name: string) => string | null
    export const removeCookie: (name: string) => void

    export const debounce: <T extends (...args: any[]) => any>(
        fn: T,
        waitFor?: number
    ) => {
        (...args: Parameters<T>): void
        cancel: () => void
    }

    export const get: (selector: string, all?: boolean) => Element | NodeListOf<Element> | null
    export const on: (
        selector: string | HTMLElement | Document,
        event: string,
        callback: any,
        all?: boolean
    ) => void
    export const off: (
        selector: string | HTMLElement | Document,
        event: string,
        fn: any,
        all?: boolean
    ) => void

    export const dispatch: (event: string, detail: unknown) => void
    export const listen: (event: string, callback: (e: any) => unknown) => {
        remove: () => void
    }

    export const getBreakpoint: () => string

    export const getLayoutClasses: (config: getLayoutClassesConfig) => string

    export const clamp: (num: number, min: number, max: number) => number
    export const lerp: (start: number, end: number, value: number) => number
    export const invlerp: (start: number, end: number, value: number) => number
    export const interpolate: (
        value: number,
        input: [start: number, end: number],
        output: [start: number, end: number]
    ) => number

    export const isOneOf: <T extends string>(values: readonly T[]) => (value: string) => value is T

    export const modal: (config: Modal | string) => ModalInstance | undefined 
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
