import type { AlertProps } from '../Alert/alert'

export type ToastProps = {
    position?: string
    [key: string]: any
} & AlertProps
