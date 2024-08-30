import React, { useEffect,useState } from 'react'
import { createPortal } from 'react-dom'
import type { ReactPopoverProps } from './popover'

import { classNames } from '../../utils/classNames'

import styles from './popover.module.scss'

const Popover = ({
    id,
    className,
    isInteractive = false,
    children,
    ...rest
}: ReactPopoverProps) => {
    const [isMounted, setIsMounted] = useState(false)

    const classes = classNames([
        styles.popover,
        className
    ])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted && isInteractive) {
        return null
    }

    if (isInteractive) {
        return createPortal(
            <dialog
                className={classes}
                id={id}
                {...rest}
            >
                {children}
            </dialog>,
            document.body
        )
    }

    return (
        <dialog
            className={classes}
            id={id}
            {...rest}
        >
            {children}
        </dialog>
    )
}

export default Popover
