import type { Snippet } from 'svelte'

export type RibbonProps = {
    offset?: number
    type?: 'folded' | null
    theme?: 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
        | undefined
    className?: string
}

export type SvelteRibbonProps = {
    children: Snippet
} & RibbonProps

export type ReactRibbonProps = {
    children: React.ReactNode
} & RibbonProps
