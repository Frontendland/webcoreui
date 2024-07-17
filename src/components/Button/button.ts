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
    className?: string
    [key: string]: any
}

export type SvelteButtonProps = {
    onClick?: () => any
} & ButtonProps

export type ReactButtonProps = {
    onClick?: () => any
    children: React.ReactNode
} & ButtonProps
