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
    className?: string
    [key: string]: any
}

export type SvelteBadgeProps = {
    onClick?: (() => any) | null
} & BadgeProps

export type ReactBadgeProps = {
    onClick?: (() => any) | null
    children: React.ReactNode
} & BadgeProps
