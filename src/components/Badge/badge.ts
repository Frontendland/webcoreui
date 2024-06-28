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
}

export type SvelteBadgeProps = {
    onClick?: (() => any) | null
} & BadgeProps

export type ReactBadgeProps = {
    onClick?: (() => any) | null
    children: React.ReactNode
} & BadgeProps
