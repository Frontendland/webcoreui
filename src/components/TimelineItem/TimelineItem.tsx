import React, { type JSX } from 'react'
import type { TimelineItemProps } from './timelineitem'

import { classNames } from '../../utils/classNames'

import styles from './timelineitem.module.scss'

export type Props = Omit<TimelineItemProps, 'titleTag'> & {
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
}

const TimelineItem = ({
    title,
    TitleTag = 'span',
    icon,
    className,
    children
}: Props) => {
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
