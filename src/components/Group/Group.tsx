import React from 'react'
import type { GroupProps } from './group'

import { classNames } from '../../utils/classNames'

import styles from './group.module.scss'

export type ReactGroupProps = {
    children: React.ReactNode
} & GroupProps

const Group = ({
    withSeparator,
    className,
    children
}: ReactGroupProps) => {
    const classes = classNames([
        styles.group,
        withSeparator && styles.separator,
        className
    ])

    return <div className={classes}>{children}</div>
}

export default Group
