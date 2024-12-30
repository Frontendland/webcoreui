import type {
    AlertProps,
    ReactAlertProps,
    SvelteAlertProps
} from '../Alert/alert'

export type ToastProps = {
    position?: 'bottom-left'
        | 'top-left'
        | 'top-right'
        | 'bottom-full'
        | 'top-full'
        | null
    [key: string]: any
} & AlertProps

export type SvelteToastProps = ToastProps & SvelteAlertProps
export type ReactToastProps = ToastProps & ReactAlertProps
