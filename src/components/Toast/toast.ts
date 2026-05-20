import type { AlertProps } from '../Alert/alert'

export type ToastProps<T extends object = object> = {
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
        | null
} & AlertProps<T>
