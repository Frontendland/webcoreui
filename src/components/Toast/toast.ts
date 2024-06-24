import type { AlertProps } from '../Alert/alert'

export type ToastProps = {
    position?: string
    [key: string]: any
} & AlertProps

export type ReactToastProps = {
    children: React.ReactNode
    icon?: string
} & ToastProps
