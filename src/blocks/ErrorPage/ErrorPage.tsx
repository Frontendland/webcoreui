import React from 'react'

import Button from '@blocks/Button/Button.tsx'

import type { ErrorPageProps } from './errorPage'
import styles from './error-page.module.scss'

const ErrorPage = ({
    type,
    typeColor,
    title,
    subTitle,
    buttons,
    ...rest
}: ErrorPageProps) => {
    const typeStyle = typeColor
        ? { '--w-type-color': typeColor } as React.CSSProperties
        : undefined

    return (
        <section className={styles.error} {...rest}>
            <strong className={styles.type} style={typeStyle}>{type}</strong>
            <h1 className={styles.title}>{title}</h1>
            {subTitle && <h2 className={styles['sub-title']}>{subTitle}</h2>}
            {!!buttons?.length && (
                <div className="flex xs wrap justify-center">
                    {buttons?.map((button, index) => (
                        <Button {...button} key={index} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default ErrorPage
