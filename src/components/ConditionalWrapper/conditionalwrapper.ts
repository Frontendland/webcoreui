import type { Snippet } from 'svelte'

export type ConditionalWrapperProps = {
    condition: boolean
    [key: string]: any
}

export type SvelteConditionalWrapperProps = {
    children: Snippet
} & ConditionalWrapperProps

export type ReactConditionalWrapperProps = {
    wrapper: (_: React.ReactNode) => any
    children: React.ReactNode
} & ConditionalWrapperProps
