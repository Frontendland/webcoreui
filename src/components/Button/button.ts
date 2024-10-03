import type { MouseEventHandler } from 'svelte/elements'

export type ButtonProps = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
        | undefined
    target?: '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | '_unfencedTop'
        | null
        | undefined
    href?: string
    className?: string
    [key: string]: any
}

export type SvelteButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>
} & ButtonProps

export type ReactButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
} & ButtonProps
