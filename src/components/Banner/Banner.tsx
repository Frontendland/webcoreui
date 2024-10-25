import React, { useState } from 'react'
import type { ReactBannerProps } from './banner'

import Button from '../Button/Button.tsx'

import { classNames } from '../../utils/classNames'

import closeIcon from '../../icons/close.svg?raw'

import styles from './banner.module.scss'

const Banner = ({
    top,
    bottom,
    closeable,
    padded,
    sticky = true,
    className,
    children
}: ReactBannerProps) => {
    const [visible, setVisible] = useState(true)

    const classes = classNames([
        styles.banner,
        bottom && styles.bottom,
        padded && styles.padded,
        !sticky && styles.relative,
        className
    ])

    const style = top
        ? { '--w-banner-top': `${top}px` } as React.CSSProperties
        : undefined

    if (!visible) {
        return null
    }

    return (
        <div className={classes} style={style}>
            {children}
            {closeable && (
                <Button
                    theme="flat"
                    className={styles.close}
                    dangerouslySetInnerHTML={{ __html: closeIcon }}
                    onClick={() => setVisible(false)}
                />
            )}
        </div>
    )
}

export default Banner
