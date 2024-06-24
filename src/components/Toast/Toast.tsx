import React from 'react'
import type { ReactToastProps } from './toast'
import Alert from '../Alert/Alert.tsx'

import './toast.scss'

const Toast = ({
    icon,
    position,
    className,
    children,
    ...rest
}: ReactToastProps) => {
    const classes = [
        'w-toast',
        position,
        className
    ].filter(Boolean).join(' ')

    return (
        <Alert {...rest} className={classes} icon={icon}>
            {children}
        </Alert>

    )
}

export default Toast
