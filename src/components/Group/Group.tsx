import React from 'react'
import type { ReactGroupProps } from './group'

import { classNames } from '../../utils/classNames'

import styles from './group.module.scss'

const Group = ({
    withSeparator,
    outline,
    className,
    children
}: ReactGroupProps) => {
    const classes = classNames([
        styles.group,
        withSeparator && styles.separator,
        outline && styles.outline,
        className
    ])

    return <div className={classes}>{children}</div>
}

export default Group
