import React from 'react'
import type { SkeletonProps } from './skeleton'

import { classNames } from '../../utils/classNames'

import styles from './skeleton.module.scss'

const Skeleton = ({
    animate = 'wave',
    type = 'rounded',
    width,
    height,
    color,
    waveColor,
    className
}: SkeletonProps) => {
    const classes = classNames([
        animate && styles[animate],
        styles[type],
        styles.skeleton,
        className
    ])

    const styleVariables = {
        ...(width && { width: `${width}px` }),
        ...(height && { height: `${height}px` }),
        ...(color && { '--w-skeleton-color': color }),
        ...(waveColor && { '--w-skeleton-wave-color': waveColor })
    } as React.CSSProperties

    return <div className={classes} style={styleVariables}>&nbsp;</div>
}

export default Skeleton
