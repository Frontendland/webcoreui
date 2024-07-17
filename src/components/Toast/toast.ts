import type { AlertProps, ReactAlertProps } from '../Alert/alert'

export type ToastProps = {
    position?: 'bottom-left' | 'top-left' | 'top-right' | null
} & AlertProps

export type ReactToastProps = ToastProps & ReactAlertProps
