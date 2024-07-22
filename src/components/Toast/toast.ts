import type { AlertProps, ReactAlertProps } from '../Alert/alert'

export type ToastProps = {
    position?: 'bottom-left' | 'top-left' | 'top-right' | null
    [key: string]: any
} & AlertProps

export type ReactToastProps = ToastProps & ReactAlertProps
