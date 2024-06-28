import React from 'react'
import type { ProgressProps } from './progress'

import styles from './progress.module.scss'
import { classNames } from '../../utils/classNames'

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
    className
}: ProgressProps) => {
    const classes = classNames([
        styles['w-progress'],
        size && styles[size],
        striped && styles.striped,
        square && styles.square,
        className
    ])

    const styleVariables = {
        ...(color && { '--w-progress-color': color }),
        ...(background && { '--w-progress-background': background }),
        ...(stripeLight && { '--w-progress-stripe-light': stripeLight }),
        ...(stripeDark && { '--w-progress-stripe-dark': stripeDark }),
    } as React.CSSProperties

    const percent = {
        '--w-progress-width': `${value}%`
    } as React.CSSProperties

    return (
        <div className={classes} style={styleVariables}>
            <div className={styles.progress} style={percent}>
                {label && `${value}%`}
            </div>
        </div>
    )
}

export default Progress

