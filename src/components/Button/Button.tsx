import React from 'react'
import type { ReactButtonProps } from './button'
import styles from './button.module.scss'

const Button = ({
    theme,
    bold,
    href,
    children,
    onClick,
    ...rest
}: ReactButtonProps) => {
    const classes = [
        styles.button,
        bold && styles.bold,
        theme && styles[theme]
    ].filter(Boolean).join(' ')

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
