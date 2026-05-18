import React, { type JSX } from 'react'
import type { CardProps } from './card'

import { classNames } from '../../utils/classNames'

import styles from './card.module.scss'

export type ReactCardProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<CardProps, 'titleTag' | 'element'>

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
