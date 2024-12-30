import type { Snippet } from 'svelte'
import type { MouseEventHandler } from 'svelte/elements'

export type ButtonProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
        | ''
    href?: string
    className?: string
    [key: string]: any
}

export type SvelteButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: Snippet
} & ButtonProps

export type ReactButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
} & ButtonProps
