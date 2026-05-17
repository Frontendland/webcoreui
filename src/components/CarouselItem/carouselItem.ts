import type { Snippet } from 'svelte'

export type CarouselItemProps = {
    active?: boolean
    className?: string
}

export type SvelteCarouselItemProps = {
    children: Snippet
} & CarouselItemProps

export type ReactCarouselItemProps = {
    children: React.ReactNode
} & CarouselItemProps
