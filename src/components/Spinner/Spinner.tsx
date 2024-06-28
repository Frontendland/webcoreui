import React from 'react'
import type { SpinnerProps } from './spinner'

import styles from './spinner.module.scss'
import { classNames } from '../../utils/classNames'

const Spinner = ({
    color,
    width,
    speed,
    size,
    dashArray
}: SpinnerProps) => {
    const classes = classNames([
        styles.spinner,
        dashArray && styles.dashed
    ])
    
    const stylesVariable = {
        ...(color && { '--w-spinner-color': color }),
        ...(width && { '--w-spinner-width': `${width}px;` }),
        ...(speed && { '--w-spinner-speed': `${speed}s;` }),
        ...(size && { '--w-spinner-size': `${size}px;` }),
        ...(dashArray && { '--w-spinner-dash': dashArray }),
    } as React.CSSProperties

    return (
        <svg
            className={classes}
            viewBox="25 25 50 50"
            role="status"
            style={stylesVariable}
        >
            <circle
                className={styles.path}
                cx="50"
                cy="50"
                r="20"
                fill="none"
            />
        </svg>
    )
}

export default Spinner
