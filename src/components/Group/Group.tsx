import React from 'react'
import type { GroupProps } from './group'

import { classNames } from '../../utils/classNames'

import styles from './group.module.scss'

export type Props = GroupProps & {
    children: React.ReactNode
}

const Group = ({
    withSeparator,
    className,
    children
}: Props) => {
    const classes = classNames([
        styles.group,
        withSeparator && styles.separator,
        className
    ])

    return <div className={classes}>{children}</div>
}

export default Group
