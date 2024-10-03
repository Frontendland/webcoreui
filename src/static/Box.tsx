import React from 'react'

import { classNames } from '@utils/classNames'

import styles from './box.module.scss'

type BoxProps = {
    fullWidth: boolean
    children: React.ReactNode
    width?: number
    height?: number
}

const Box = ({
    fullWidth = false,
    children,
    width,
    height
}: BoxProps) => {
    const classes = classNames([
        styles.box,
        fullWidth && styles.full
    ])

    const dimensions: React.CSSProperties = {
        width,
        height
    }

    return (
        <div className={classes} style={dimensions}>{children}</div>
    )
}

export default Box
