import type { ToastProps } from './toast'

import Alert, { type ReactAlertProps } from '../Alert/Alert.tsx'

import { classNames } from '../../utils/classNames'

import styles from './toast.module.scss'

export type ReactToastProps = ToastProps<React.HTMLAttributes<HTMLElement>> & ReactAlertProps

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
