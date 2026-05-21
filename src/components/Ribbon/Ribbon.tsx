import React from 'react'
import type { RibbonProps } from './ribbon'

import { classNames } from '../../utils/classNames'

import styles from './ribbon.module.scss'

export type Props = RibbonProps & {
    children: React.ReactNode
}

const Ribbon = ({
    offset,
    type,
    theme,
    className,
    children
}: Props) => {
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
