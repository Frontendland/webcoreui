import type { Snippet } from 'svelte'

export type GroupProps = {
    withSeparator?: boolean
    className?: string
}

export type SvelteGroupProps = {
    children: Snippet
} & GroupProps

export type ReactGroupProps = {
    children: React.ReactNode
} & GroupProps
