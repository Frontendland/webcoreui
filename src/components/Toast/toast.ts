import type { AlertProps, ReactAlertProps } from '../Alert/alert'

export type ToastProps = {
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
        | null
    [key: string]: any
} & AlertProps

export type ReactToastProps = ToastProps & ReactAlertProps
