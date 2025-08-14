import type { JSX } from 'react'
import type { Snippet } from 'svelte'

import type { IconProps } from '../Icon/icon'

export type TimelineItemProps = {
    title?: string
    titleTag?: string
    icon?: IconProps['type'] | string
    className?: string
}

export type SvelteTimelineItemProps = {
    children: Snippet
} & TimelineItemProps

export type ReactTimelineItemProps = {
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<TimelineItemProps, 'titleTag'>
