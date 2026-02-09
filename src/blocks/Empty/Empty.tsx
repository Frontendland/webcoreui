import React from 'react'
import { classNames } from 'webcoreui'

import Button from '@blocks/Button/Button.tsx'

import type { EmptyProps } from './empty'
import styles from './empty.module.scss'

const Empty = ({
    icon,
    iconWithBackground,
    title,
    text,
    buttons,
    className
}: EmptyProps) => {
    const classes = classNames([
        'flex column center xs',
        iconWithBackground && styles['icon-bg'],
        styles.empty,
        className
    ])

    return (
        <section className={classes}>
            {icon && (
                <span dangerouslySetInnerHTML={{ __html: icon }} />
            )}

            <b className={styles.title}>{title}</b>

            <div
                className={classNames([styles.text, 'muted'])}
                dangerouslySetInnerHTML={{ __html: text }}
            />

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

export default Empty
