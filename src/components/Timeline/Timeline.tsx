import React from 'react'
import type { TimelineProps } from './timeline'

import './timeline.scss'

type ReactTimelineProps = {
    children: React.ReactNode
} & TimelineProps

const Timeline = ({
    theme,
    counter,
    alternate,
    centered,
    color,
    textColor,
    className,
    children
}: ReactTimelineProps) => {
    const classes = [
        'w-timeline',
        theme,
        alternate && 'alternate',
        centered && 'centered',
        className
    ].filter(Boolean).join(' ')

    const styles = {
        ...(color && { '--w-timeline-color': color }),
        ...(textColor && { '--w-timeline-text-color': textColor }),
        ...(counter && { '--w-timeline-counter': counter }),
    } as React.CSSProperties

    return (
        <ul className={classes} style={styles}>
            {children}
        </ul>
    )
}

export default Timeline
