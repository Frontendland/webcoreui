import React from 'react'
import type { ReactTimelineItemProps } from './timelineitem'

import { classNames } from '../../utils/classNames'

import styles from './timelineitem.module.scss'

const TimelineItem = ({
    title,
    TitleTag = 'span',
    icon,
    className,
    children
}: ReactTimelineItemProps) => {
    const classes = classNames([
        styles.item,
        icon && styles['with-icon'],
        className
    ])

    return (
        <li className={classes}>
            {icon && (
                <span
                    className={styles.icon}
                    dangerouslySetInnerHTML={{ __html: icon }}
                />
            )}
            {title && (
                <TitleTag className={styles.title}>{title}</TitleTag>
            )}
            {children}
        </li>
    )
}

export default TimelineItem
