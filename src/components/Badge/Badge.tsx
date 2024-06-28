import React from 'react'
import type { ReactBadgeProps } from './badge'
import styles from './badge.module.scss'

const Badge = ({ theme, onClick, children, ...rest }: ReactBadgeProps) => {
    const classes = [
        styles.badge,
        theme && styles[theme],
        onClick && styles.hover
    ].filter(Boolean).join(' ')

    return (
        <span className={classes} onClick={onClick} {...rest}>
            {children}
        </span>
    )
}

export default Badge
