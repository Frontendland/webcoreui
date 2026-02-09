import React, { useState } from 'react'
import type { AccordionProps } from './accordion'

import { classNames } from '../../utils/classNames'

import ChevronDown from '../../icons/chevron-down.svg?raw'
import Plus from '../../icons/plus.svg?raw'

import styles from './accordion.module.scss'

const Accordion = ({
    items,
    icon,
    reverse,
    className
}: AccordionProps) => {
    const [state, setState] = useState(items.map(item => item.expanded ?? false))

    const toggle = (index: number) => {
        setState(state.map((_, i) => index === i
            ? !state[i]
            : state[i]
        ))
    }

    const classes = classNames([
        styles.accordion,
        reverse && styles.reverse,
        icon === 'plus' && styles.plus,
        className
    ])

    return (
        <ul className={classes}>
            {items.map((item, index) => (
                <li key={index}>
                    <button
                        data-open={state[index]}
                        onClick={() => toggle(index)}
                        className={classNames([
                            styles.title,
                            item.reverse && styles.reverse
                        ])}
                        dangerouslySetInnerHTML={{ __html: icon === 'none'
                            ? item.title
                            : `${item.title} ${icon === 'plus' ? Plus : ChevronDown}`
                        }}
                    />
                    <div className={styles.wrapper}>
                        <div
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Accordion
