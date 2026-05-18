import React from 'react'
import type { KbdProps } from './kbd'
import { keyMap } from './keyMap'

import { classNames } from '../../utils/classNames'

import styles from './kbd.module.scss'

export type ReactKbdProps = {
    children?: React.ReactNode
} & KbdProps

const Kbd = ({
    keys,
    className,
    children
}: ReactKbdProps) => {
    const classes = classNames([
        styles.kbd,
        className
    ])

    return (
        <kbd className={classes}>
            {keys?.map(key => keyMap[key]).join('')}
            {children}
        </kbd>
    )
}

export default Kbd
