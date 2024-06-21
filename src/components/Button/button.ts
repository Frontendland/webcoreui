export type ButtonProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
    bold?: boolean
    href?: string
    target?: string
    disabled?: boolean
    onClick?: () => any
}
