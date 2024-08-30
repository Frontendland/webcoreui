import React from 'react'
import type { ReactBadgeProps } from './badge'

import { classNames } from '../../utils/classNames'

import styles from './badge.module.scss'

const Badge = ({
    theme,
    onClick,
    hover,
    className,
    children,
    ...rest
}: ReactBadgeProps) => {
    const classes = classNames([
        styles.badge,
        theme && styles[theme],
        (onClick || hover) && styles.hover,
        className
    ])

    if (onClick) {
        return (
            <button className={classes} onClick={onClick} {...rest}>
                {children}
            </button>
        )
    }

    return (
        <span className={classes} {...rest}>
            {children}
        </span>
    )
}

export default Badge
