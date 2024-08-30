import React from 'react'
import type { ReactCardProps } from './card'

import { classNames } from '../../utils/classNames'

import styles from './card.module.scss'

const Card = ({
    Element = 'section',
    title,
    TitleTag = 'span',
    compact,
    className,
    secondary,
    children,
    ...rest
}: ReactCardProps) => {
    const classes = classNames([
        styles.card,
        className,
        secondary && styles.secondary
    ])

    const bodyClasses = classNames([
        styles.body,
        compact && styles.compact
    ])

    return (
        <Element className={classes} {...rest}>
            {title && (
                <TitleTag className={styles.title}>{title}</TitleTag>
            )}
            <div className={bodyClasses}>
                {children}
            </div>
        </Element>
    )
}

export default Card
