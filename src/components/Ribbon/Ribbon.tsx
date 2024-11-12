import React from 'react'
import type { ReactRibbonProps } from './ribbon'

import { classNames } from '../../utils/classNames'

import styles from './ribbon.module.scss'

const Ribbon = ({
    offset,
    type,
    theme,
    className,
    children
}: ReactRibbonProps) => {
    const classes = classNames([
        styles.ribbon,
        theme && styles[theme],
        type && styles[type],
        className
    ])

    const styleVariable = offset
        ? { top: offset, left: offset } as React.CSSProperties
        : undefined

    return (
        <span className={classes} style={styleVariable}>
            {children}
        </span>
    )
}

export default Ribbon
