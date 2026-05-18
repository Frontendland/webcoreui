export type BadgeProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    hover?: boolean
    small?: boolean
    rounded?: boolean
    transparent?: boolean
    className?: string
    [key: string]: any
}
