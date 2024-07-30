import React from 'react'
import type { ReactButtonProps } from './button'

import styles from './button.module.scss'
import { classNames } from '../../utils/classNames'

const Button = ({
    theme,
    href,
    className,
    onClick,
    children,
    ...rest
}: ReactButtonProps) => {
    const classes = classNames([
        styles.button,
        theme && styles[theme],
        className
    ])

    if (href) {
        return (
            <a {...rest} href={href} className={classes || undefined}>
                {children}
            </a>
        )
    }

    return (
        <button {...rest} className={classes || undefined} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
