import React from 'react'
import type { ButtonProps } from './button'

import { classNames } from '../../utils/classNames'

import styles from './button.module.scss'

export type ReactButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
} & ButtonProps

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
            <a {...rest} href={href} className={classes}>
                {children}
            </a>
        )
    }

    return (
        <button {...rest} className={classes} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
