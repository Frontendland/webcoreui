import React from 'react'
import type { ReactToastProps } from './toast'
import Alert from '../Alert/Alert.tsx'

import styles from './toast.module.scss'
import { classNames } from '../../utils/classNames'

const Toast = ({
    icon,
    position,
    className,
    children,
    ...rest
}: ReactToastProps) => {
    const classes = classNames([
        styles.toast,
        className
    ])

    const additionalProps = {
        ...(position && { 'data-position': position }),
        titleProps: {
            'data-id': 'title'
        },
        bodyProps: {
            'data-id': 'body'
        }
    }

    return (
        <Alert {...rest} className={classes} icon={icon} {...additionalProps}>
            {children}
        </Alert>

    )
}

export default Toast
