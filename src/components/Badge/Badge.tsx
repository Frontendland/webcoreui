import React from 'react'
import type { BadgeProps } from './badge'
import './badge.scss'

type ReactBadgeProps = {
    children: React.ReactNode
} & BadgeProps

const Badge = ({ theme, onClick, children }: ReactBadgeProps) => {
    const classes = [
        'w-badge',
        theme || null,
        onClick && 'hover'
    ].filter(Boolean).join(' ')

    return (
        <span className={classes} onClick={onClick}>
            {children}
        </span>
    )
}

export default Badge
