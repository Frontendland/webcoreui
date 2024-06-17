export type AlertProps = {
    element?: string
    title?: string | null
    titleTag?: string
    icon?: string | null
    className?: string | null
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
    [key: string]: any
}
