
import React from 'react'
import type { ReactFAQProps } from './faq'

import styles from './faq.module.scss'

import { classNames } from 'webcoreui'
import {
    Accordion
} from 'webcoreui/react'

const FAQ = ({
    element = 'section',
    title = 'Frequently Asked Questions',
    titleTag = 'h2',
    items,
    className,
    children,
    ...rest
}: ReactFAQProps) => {
    const Component = element as keyof JSX.IntrinsicElements
    const Title = titleTag as keyof JSX.IntrinsicElements

    const classes = classNames([
        styles.faq,
        className
    ])

    return (
        <Component className={classes} {...rest}>
            <div>
                <Title className={styles.title}>{title}</Title>
                {children}
            </div>
            <Accordion items={items} className={styles.accordion} />
        </Component>
    )
}

export default FAQ
