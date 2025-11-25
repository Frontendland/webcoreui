import React from 'react'
import type { ProgressProps } from './progress'

import { classNames } from '../../utils/classNames'

import styles from './progress.module.scss'

const Progress = ({
    value,
    size,
    label,
    color,
    background,
    square,
    striped,
    stripeLight,
    stripeDark,
    indeterminate,
    className
}: ProgressProps) => {
    const classes = classNames([
        styles['w-progress'],
        size && styles[size],
        striped && styles.striped,
        square && styles.square,
        indeterminate && styles.indeterminate,
        className
    ])

    const styleVariables = {
        ...(color && { '--w-progress-color': color }),
        ...(background && { '--w-progress-background': background }),
        ...(stripeLight && { '--w-progress-stripe-light': stripeLight }),
        ...(stripeDark && { '--w-progress-stripe-dark': stripeDark })
    } as React.CSSProperties

    const currentValue = indeterminate && !value ? 20 : value

    const percent = {
        '--w-progress-width': `${currentValue}%`
    } as React.CSSProperties

    return (
        <div className={classes} style={styleVariables}>
            <div className={styles.progress} style={percent}>
                {label && `${currentValue}%`}
            </div>
        </div>
    )
}

export default Progress

