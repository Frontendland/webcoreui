export type BadgeProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
    onClick?: () => any
}

export type ReactBadgeProps = {
    children: React.ReactNode
} & BadgeProps
