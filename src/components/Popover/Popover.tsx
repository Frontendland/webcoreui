import React, { useEffect,useState } from 'react'
import { createPortal } from 'react-dom'
import type { PopoverProps } from './popover'

import { classNames } from '../../utils/classNames'

import styles from './popover.module.scss'

export type Props = PopoverProps<React.DialogHTMLAttributes<HTMLDialogElement>> & {
    isInteractive?: boolean
    children?: React.ReactNode
}

const Popover = ({
    id,
    className,
    transparent,
    isInteractive = false,
    children,
    ...rest
}: Props) => {
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
