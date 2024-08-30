import React from 'react'
import type { ReactTimelineProps } from './timeline'

import { classNames } from '../../utils/classNames'

import styles from './timeline.module.scss'

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
    const classes = classNames([
        styles.timeline,
        theme && theme.split(' ').map(style => styles[style]),
        alternate && styles.alternate,
        centered && styles.centered,
        className
    ])

    const styleVariables = {
        ...(color && { '--w-timeline-color': color }),
        ...(textColor && { '--w-timeline-text-color': textColor }),
        ...(counter && { '--w-timeline-counter': counter })
    } as React.CSSProperties

    return (
        <ul className={classes} style={styleVariables}>
            {children}
        </ul>
    )
}

export default Timeline
