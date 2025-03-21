import React from 'react'
import { classNames } from 'webcoreui'

import type { MaintenanceProps } from './maintenance'
import cog from './cog.svg?raw'
import styles from './maintenance.module.scss'

const Maintenance = ({
    logo,
    animated = true,
    title = 'Under Maintenance',
    subTitle = 'We are performing scheduled maintenance.',
    className
}: MaintenanceProps) => {
    const classes = classNames([
        styles.maintenance,
        animated && styles.animated,
        className
    ])

    return (
        <section className={classes}>
            {logo?.url ? (
                <img
                    src={logo.url}
                    alt={logo.alt || 'Logo'}
                    width={logo.width}
                    height={logo.height}
                />
            ) : <span dangerouslySetInnerHTML={{ __html: cog }} />}
            <h1 className={styles.title}>{title}</h1>
            {subTitle && (
                <span
                    className="muted"
                    dangerouslySetInnerHTML={{ __html: subTitle }}
                />
            )}
        </section>
    )
}

export default Maintenance
