import React from 'react'
import type { BadgeProps } from './badge'
import './badge.scss'

const Badge = ({ theme, onClick, children }: BadgeProps) => {
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
