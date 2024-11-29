import React from 'react'
import { Button } from 'webcoreui/react'

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
                        <Button
                            {...button}
                            key={index}
                            icon={null}
                            dangerouslySetInnerHTML={{ __html: button.icon
                                ? `${button.icon} ${button.text}`
                                : button.text
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default ErrorPage
