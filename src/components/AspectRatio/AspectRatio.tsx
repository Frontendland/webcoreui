import React from 'react'
import type { ReactAspectRatioProps } from './aspectratio'

import { classNames } from '../../utils/classNames'

import styles from './aspect-ratio.module.scss'

const AspectRatio = ({
    ratio,
    children,
    className
}: ReactAspectRatioProps) => {
    const classes = classNames([
        styles.ratio,
        className
    ])

    return (
        <div
            className={classes}
            style={{ aspectRatio: ratio.replace(':', '/') }}
        >
            {children}
        </div>
    )
}

export default AspectRatio
