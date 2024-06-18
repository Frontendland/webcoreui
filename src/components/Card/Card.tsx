import React from 'react'
import type { CardProps } from './card'
import './card.scss'

type ReactCardProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
}

const Card = ({
    Element = 'section',
    title,
    TitleTag = 'span',
    compact,
    className,
    secondary,
    children,
    ...rest
}: CardProps & ReactCardProps) => {
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
