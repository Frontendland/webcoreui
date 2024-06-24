import React from 'react'
import type { ReactCardProps } from './card'
import './card.scss'

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
        'w-card',
        className,
        secondary && 'secondary'
    ].filter(Boolean).join(' ')

    return (
        <Element className={classes} {...rest}>
            {title && (
                <TitleTag className="card-title">{title}</TitleTag>
            )}
            <div className={compact ? 'card-body compact' : 'card-body'}>
                {compact && !secondary
                    ? <div className="card-wrapper">{children}</div>
                    : children
                }
            </div>
        </Element>
    )
}

export default Card
