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
    onClick?: () => any
    [key: string]: any
}

export type ReactButtonProps = {
    children: React.ReactNode
} & ButtonProps
