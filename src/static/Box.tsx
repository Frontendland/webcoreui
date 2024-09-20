import React from 'react'

import { classNames } from '@utils/classNames'

import styles from './box.module.scss'

type BoxProps = {
    fullWidth: boolean
    children: React.ReactNode
}

const Box = ({
    fullWidth = false,
    children
}: BoxProps) => {
    const classes = classNames([
        styles.box,
        fullWidth && styles.full
    ])

    return (
        <div className={classes}>{children}</div>
    )
}

export default Box
