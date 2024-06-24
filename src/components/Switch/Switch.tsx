import React from 'react'
import type { ReactSwitchProps } from './switch'
import './switch.scss'

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
    onClick
}: ReactSwitchProps) => {
    const classes = [
        'w-switch',
        reverse && 'reverse',
        small && 'small',
        square && 'square',
        disabled && 'disabled',
        className
    ].filter(Boolean).join(' ')

    const styles = {
        ...(offColor && { '--w-switch-off-color': offColor }),
        ...(onColor && { '--w-switch-on-color': onColor })
    } as React.CSSProperties

    return (
        <label className={classes} style={styles || null}>
            <input
                type="checkbox"
                defaultChecked={toggled}
                disabled={disabled}
                onClick={onClick}
            />
            <span className="toggle"></span>
            {label && <span className="label">{label}</span>}
        </label>
    )
    
}

export default Switch
