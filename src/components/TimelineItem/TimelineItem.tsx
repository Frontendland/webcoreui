import React from 'react'
import type { ReactTimelineItemProps } from './timelineitem'

import { classNames } from '../../utils/classNames'

import styles from './timelineitem.module.scss'

const TimelineItem = ({
    title,
    TitleTag = 'span',
    className,
    children
}: ReactTimelineItemProps) => {
    const classes = classNames([
        styles.item,
        className
    ])

    return (
        <li className={classes}>
            {title && (
                <TitleTag className={styles.title}>{title}</TitleTag>
            )}
            {children}
        </li>
    )
}

export default TimelineItem
