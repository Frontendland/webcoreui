import type { Snippet } from 'svelte'

export type TimelineItemProps = {
    title?: string
    titleTag?: string
    className?: string
}

export type SvelteTimelineItemProps = {
    children: Snippet
} & TimelineItemProps

export type ReactTimelineItemProps = {
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<TimelineItemProps, 'titleTag'>
