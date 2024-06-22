import React from 'react'
import type { SpinnerProps } from './spinner'

import './spinner.scss'

const Spinner = ({
    color,
    width,
    speed,
    size,
    dashArray
}: SpinnerProps) => {
    const classes = [
        'w-spinner',
        dashArray && 'dashed'
    ].filter(Boolean).join(' ')
    
    const styles = {
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
            style={styles}
        >
            <circle
                className="spinner-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
            />
        </svg>
    )
}

export default Spinner
