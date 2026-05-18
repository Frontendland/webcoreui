import type { AlertProps } from '../Alert/alert'

export type ToastProps = {
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
        | null
    [key: string]: any
} & AlertProps
