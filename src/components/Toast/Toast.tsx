import type { ToastProps } from './toast'

import Alert, { type Props as AlertProps } from '../Alert/Alert.tsx'

import { classNames } from '../../utils/classNames'

import styles from './toast.module.scss'

export type Props = ToastProps<React.HTMLAttributes<HTMLElement>> & AlertProps

const Toast = ({
    icon,
    position,
    className,
    children,
    ...rest
}: Props) => {
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
