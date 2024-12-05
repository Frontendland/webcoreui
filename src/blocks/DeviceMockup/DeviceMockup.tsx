import React from 'react'
import { classNames } from 'webcoreui'

import type { ReactDeviceMockupProps } from './deviceMockup'
import styles from './device-mockup.module.scss'

const DeviceMockup = ({
    type,
    url,
    showButtons = true,
    closeButtonColor,
    maximizeButtonColor,
    minimizeButtonColor,
    className,
    children
}: ReactDeviceMockupProps) => {
    const classes = classNames([
        styles.mockup,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        'flex xs items-center'
    ])

    const getColor = (color: string | undefined) => color
        ? { background: color }
        : undefined

    return (
        <div className={classes}>
            {(type === 'desktop' && (showButtons || url)) && (
                <div className={styles.actions}>
                    {showButtons && (
                        <div className={containerClasses} style={{ minHeight: 15 }}>
                            <span className={styles.button} style={getColor(closeButtonColor)} />
                            <span className={styles.button} style={getColor(maximizeButtonColor)} />
                            <span className={styles.button} style={getColor(minimizeButtonColor)} />
                        </div>
                    )}
                    {url && (
                        <div className={classNames([styles.url, !showButtons && styles.full])}>
                            {url}
                        </div>
                    )}
                </div>
            )}
            {children}
        </div>
    )
}

export default DeviceMockup
