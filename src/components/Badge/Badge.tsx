import React from 'react'
import type { ReactBadgeProps } from './badge'

import styles from './badge.module.scss'
import { classNames } from '../../utils/classNames'

const Badge = ({
    theme,
    onClick,
    hover,
    children,
    ...rest
}: ReactBadgeProps) => {
    const classes = classNames([
        styles.badge,
        theme && styles[theme],
        (onClick || hover) && styles.hover
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
