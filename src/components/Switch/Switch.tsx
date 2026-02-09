import React from 'react'
import type { ReactSwitchProps } from './switch'

import { classNames } from '../../utils/classNames'

import styles from './switch.module.scss'

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
                type="checkbox"
                defaultChecked={toggled}
                disabled={disabled}
                {...rest}
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
