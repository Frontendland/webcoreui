import React from 'react'
import type { ButtonProps } from './button'
import './button.scss'

export const Button = ({
    theme,
    bold,
    href,
    children,
    onClick,
    ...rest
}: ButtonProps) => {
    const classes = [
        'w-button',
        bold && 'bold',
        theme
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
