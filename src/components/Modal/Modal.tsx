import React from 'react'
import type { ReactModalProps } from './modal'

import Button from '../Button/Button.tsx'

import { classNames } from '../../utils/classNames'

import alert from '../../icons/alert.svg?raw'
import success from '../../icons/circle-check.svg?raw'
import closeIcon from '../../icons/close.svg?raw'
import info from '../../icons/info.svg?raw'
import warning from '../../icons/warning.svg?raw'

import styles from './modal.module.scss'

const iconMap = {
    info,
    success,
    warning,
    alert
}

const Modal = ({
    title,
    subTitle,
    showCloseIcon = true,
    closeOnEsc = true,
    closeOnOverlay = true,
    transparent,
    theme,
    id,
    className,
    children,
    ...rest
}: ReactModalProps) => {
    const classes = classNames([
        styles.modal,
        theme && styles[theme],
        transparent && styles.transparent,
        className
    ])

    const close = [
        showCloseIcon && 'icon',
        closeOnEsc && 'esc',
        closeOnOverlay && 'overlay'
    ].filter(Boolean).join(',')

    return (
        <React.Fragment>
            <dialog
                className={classes}
                id={id}
                data-close={close.length ? close : undefined}
                {...rest}
            >
                {showCloseIcon && (
                    <Button
                        theme="flat"
                        className={styles.close}
                        data-id="close"
                        dangerouslySetInnerHTML={{ __html: closeIcon }}
                    />
                )}
                {title && (
                    <strong
                        className={styles.title}
                        dangerouslySetInnerHTML={{
                            __html: theme ? iconMap[theme] + title : title
                        }}
                    />
                )}
                {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
                {children}
            </dialog>
            <div className={styles.overlay} />
        </React.Fragment>
    )
}

export default Modal
