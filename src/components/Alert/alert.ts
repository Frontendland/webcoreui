export type AlertProps = {
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
    [key: string]: any
}
