import React from 'react'
import type { ReactPopoverProps } from './popover'

import styles from './popover.module.scss'
import { classNames } from '../../utils/classNames'

const Popover = ({
    id,
    className,
    children
}: ReactPopoverProps) => {
    const classes = classNames([
        styles.popover,
        className
    ])

    return (
        <dialog
            className={classes}
            id={id}
        >
            {children}
        </dialog>
    )
}

export default Popover
