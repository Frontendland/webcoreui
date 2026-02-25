import type { Snippet } from 'svelte'

export type CollapsibleProps = {
    initialHeight?: string
    maxHeight?: string
    toggled?: boolean
    className?: string
    togglesClassName?: string
}

export type SvelteCollapsibleProps = {
    on: Snippet
    off: Snippet
    children: Snippet
} & CollapsibleProps

export type ReactCollapsibleProps = {
    on: React.ReactNode
    off: React.ReactNode
    children: React.ReactNode
} & CollapsibleProps

