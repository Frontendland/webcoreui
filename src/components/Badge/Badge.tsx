import React from 'react'
import type { BadgeProps } from './badge'
import './badge.scss'

type ReactBadgeProps = {
    children: React.ReactNode
} & BadgeProps

const Badge = ({ theme, onClick, children, ...rest }: ReactBadgeProps) => {
    const classes = [
        'w-badge',
        theme || null,
        onClick && 'hover'
    ].filter(Boolean).join(' ')

    return (
        <span className={classes} onClick={onClick} {...rest}>
            {children}
        </span>
    )
}

export default Badge
