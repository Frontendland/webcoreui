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
    bodyClassName,
    secondary,
    flat,
    children,
    ...rest
}: ReactCardProps) => {
    const classes = classNames([
        styles.card,
        secondary && styles.secondary,
        (flat && (compact || secondary)) && styles.flat,
        className
    ])

    const bodyClasses = classNames([
        styles.body,
        compact && styles.compact,
        bodyClassName
    ])

    const titleClasses = classNames([
        styles.title,
        flat && styles.flat,
        (flat && compact) && styles.compact
    ])

    return (
        <Element className={classes} {...rest}>
            {title && (
                <TitleTag
                    className={titleClasses}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            <div className={bodyClasses}>
                {children}
            </div>
        </Element>
    )
}

export default Card
