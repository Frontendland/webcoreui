import React from 'react'
import type { ReactCardProps } from './card'
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
    const classes = [
        styles.card,
        className,
        secondary && styles.secondary
    ].filter(Boolean).join(' ')

    const bodyClasses = [
        styles.body,
        compact && styles.compact
    ].filter(Boolean).join(' ')

    return (
        <Element className={classes} {...rest}>
            {title && (
                <TitleTag className={styles.title}>{title}</TitleTag>
            )}
            <div className={bodyClasses}>
                {compact && !secondary
                    ? <div className={styles.wrapper}>{children}</div>
                    : children
                }
            </div>
        </Element>
    )
}

export default Card
