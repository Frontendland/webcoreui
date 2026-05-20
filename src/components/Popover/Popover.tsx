import React, { useEffect,useState } from 'react'
import { createPortal } from 'react-dom'
import type { PopoverProps } from './popover'

import { classNames } from '../../utils/classNames'

import styles from './popover.module.scss'

export type ReactPopoverProps = {
    isInteractive?: boolean
    children?: React.ReactNode
} & PopoverProps<React.DialogHTMLAttributes<HTMLDialogElement>>

const Popover = ({
    id,
    className,
    transparent,
    isInteractive = false,
    children,
    ...rest
}: ReactPopoverProps) => {
    const [isMounted, setIsMounted] = useState(false)

    const classes = classNames([
        styles.popover,
        transparent && styles.transparent,
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
            <dialog {...rest} className={classes}>
                {children}
            </dialog>,
            document.body
        )
    }

    return (
        <dialog {...rest} className={classes}>
            {children}
        </dialog>
    )
}

export default Popover
