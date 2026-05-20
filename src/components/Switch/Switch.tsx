import React from 'react'
import type { SwitchProps } from './switch'

import { classNames } from '../../utils/classNames'

import styles from './switch.module.scss'

export type ReactSwitchProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & SwitchProps<React.InputHTMLAttributes<HTMLInputElement>>

const Switch = ({
    label,
    toggled,
    offColor,
    onColor,
    reverse,
    small,
    square,
    disabled,
    className,
    ...rest
}: ReactSwitchProps) => {
    const classes = classNames([
        styles.switch,
        reverse && styles.reverse,
        small && styles.small,
        square && styles.square,
        disabled && styles.disabled,
        className
    ])

    const styleVariables = {
        ...(offColor && { '--w-switch-off-color': offColor }),
        ...(onColor && { '--w-switch-on-color': onColor })
    } as React.CSSProperties

    return (
        <label className={classes} style={styleVariables || null}>
            <input
                {...rest}
                type="checkbox"
                defaultChecked={toggled}
            />
            <span className={styles.toggle}></span>
            {label && (
                <span
                    className={styles.label}
                    dangerouslySetInnerHTML={{ __html: label }}
                />
            )}
        </label>
    )
}

export default Switch
