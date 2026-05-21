import type React from 'react'
import type { BadgeProps } from './badge'

import { classNames } from '../../utils/classNames'

import styles from './badge.module.scss'

export type Props = BadgeProps<React.HTMLAttributes<HTMLElement>> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
}

const Badge = ({
    theme,
    onClick,
    hover,
    small,
    rounded,
    transparent,
    className,
    children,
    ...rest
}: Props) => {
    const classes = classNames([
        styles.badge,
        theme && styles[theme],
        (onClick || hover) && styles.hover,
        small && styles.small,
        rounded && styles.round,
        transparent && styles.transparent,
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
