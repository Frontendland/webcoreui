import type { MouseEventHandler } from 'svelte/elements'

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
    onClick?: MouseEventHandler<HTMLButtonElement>
} & BadgeProps

export type ReactBadgeProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
} & BadgeProps
