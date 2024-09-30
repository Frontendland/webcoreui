export type ButtonProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
    href?: string
    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
    className?: string
    [key: string]: any
}

export type SvelteButtonProps = {
    onClick?: ((event: MouseEvent) => void) | null
} & ButtonProps

export type ReactButtonProps = {
    onClick?: (event: React.MouseEvent) => void
    children: React.ReactNode
} & ButtonProps
