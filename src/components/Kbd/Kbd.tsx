import React from 'react'
import type { ReactKbdProps } from './kbd'
import { keyMap } from './keyMap'

import { classNames } from '../../utils/classNames'

import styles from './kbd.module.scss'

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
