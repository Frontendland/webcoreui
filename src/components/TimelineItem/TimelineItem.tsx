import React from 'react'
import type { TimelineItemProps } from './timelineitem'

import styles from './timelineitem.module.scss'
import { classNames } from '../../utils/classNames'

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
