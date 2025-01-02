import type { Snippet } from 'svelte'
import type { MouseEventHandler } from 'svelte/elements'

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
    className?: string
    [key: string]: any
}

export type SvelteBadgeProps = {
    onClick?: MouseEventHandler<HTMLButtonElement> | null
    children?: Snippet
} & BadgeProps

export type ReactBadgeProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
} & BadgeProps
