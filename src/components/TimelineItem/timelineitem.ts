export type TimelineItemProps = {
    title?: string
    titleTag?: string
    className?: string
}

export type ReactTimelineItemProps = {
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<TimelineItemProps, 'titleTag'>
