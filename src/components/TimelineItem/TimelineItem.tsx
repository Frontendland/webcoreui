import React from 'react'
import type { TimelineItemProps } from './timelineitem'

import './timelineitem.scss'

type ReactTimelineItemProps = {
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<TimelineItemProps, 'titleTag'>

const TimelineItem = ({
    title,
    TitleTag = 'span',
    className,
    children
}: ReactTimelineItemProps) => {
    const classes = [
        'w-timeline-item',
        className
    ].filter(Boolean).join(' ')

    return (
        <li className={classes}>
            {title && (
                <TitleTag className="timeline-title">{title}</TitleTag>
            )}
            {children}
        </li>
    )
}

export default TimelineItem
