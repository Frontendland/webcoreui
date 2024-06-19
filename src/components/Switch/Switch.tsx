import React from 'react'
import type { SwitchProps } from './switch'
import './switch.scss'

type ReactSwitchProps = {
    onClick: () => any
} & SwitchProps

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
        <label className={classes} style={styles || null} onClick={onClick}>
            <input type="checkbox" checked={toggled} disabled={disabled} />
            <span className="toggle"></span>
            {label && <span className="label">{label}</span>}
        </label>
    )
    
}

export default Switch
