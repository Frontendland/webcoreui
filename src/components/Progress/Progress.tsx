import React from 'react'
import type { ProgressProps } from './progress'

import './progress.scss'

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
    const classes = [
        'w-progress',
        size,
        striped && 'striped',
        square && 'square',
        className
    ].filter(Boolean).join(' ')

    const styles = {
        ...(color && { '--w-progress-color': color }),
        ...(background && { '--w-progress-background': background }),
        ...(stripeLight && { '--w-progress-stripe-light': stripeLight }),
        ...(stripeDark && { '--w-progress-stripe-dark': stripeDark }),
    } as React.CSSProperties

    const percent = {
        '--w-progress-width': `${value}%`
    } as React.CSSProperties

    return (
        <div className={classes} style={styles}>
            <div className="progress" style={percent}>
                {label && `${value}%`}
            </div>
        </div>
    )
}

export default Progress

