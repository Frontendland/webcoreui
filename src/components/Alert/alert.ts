export type AlertProps<T extends object = object> = {
    element?: string
    title?: string
    titleTag?: string
    titleProps?: any
    bodyProps?: any
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
} & T
