import type { Snippet } from 'svelte'

export type AspectRatioProps = {
    ratio: string
    className?: string
}

export type SvelteAspectRatioProps = {
    children: Snippet
} & AspectRatioProps

export type ReactAspectRatioProps = {
    children: React.ReactNode
} & AspectRatioProps
