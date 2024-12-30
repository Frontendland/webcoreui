import type { Snippet } from 'svelte'

export type SpoilerProps = {
    color?: string
    animated?: boolean
    block?: boolean
    tooltip?: string
    tooltipPosition?: 'bottom' | null
}

export type SvelteSpoilerProps = {
    children: Snippet
} & SpoilerProps

export type ReactSpoilerProps = {
    children: React.ReactNode
} & SpoilerProps
