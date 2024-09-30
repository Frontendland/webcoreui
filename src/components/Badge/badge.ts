export type BadgeProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
    hover?: boolean
    small?: boolean
    className?: string
    [key: string]: any
}

export type SvelteBadgeProps = {
    onClick?: ((event: MouseEvent) => void) | null
} & BadgeProps

export type ReactBadgeProps = {
    onClick?: (event: React.MouseEvent) => void
    children: React.ReactNode
} & BadgeProps
