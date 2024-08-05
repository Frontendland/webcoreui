import React from 'react'
import type { ReactModalProps } from './modal'

import styles from './modal.module.scss'
import { classNames } from '../../utils/classNames'

import Button from '../Button/Button.tsx'
import closeIcon from '../../icons/close.svg?raw'

const Modal = ({
    title,
    subTitle,
    showCloseIcon = true,
    closeOnEsc = true,
    closeOnOverlay = true,
    id,
    className,
    children
}: ReactModalProps) => {
    const classes = classNames([
        styles.modal,
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
            >
                {showCloseIcon && (
                    <Button
                        theme="flat"
                        className={styles.close}
                        data-id="close"
                        dangerouslySetInnerHTML={{ __html: closeIcon }}
                    />
                )}
                {title && <strong className={styles.title}>{title}</strong>}
                {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
                {children}
            </dialog>
            <div className={styles.overlay} />
        </React.Fragment>
    )
}

export default Modal
