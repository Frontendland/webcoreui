import React, { useState } from 'react'
import type { AccordionProps } from './accordion'
import ArrowDown from '../../icons/arrow-down.svg?raw'
import styles from './accordion.module.scss'

const Accordion = ({ items }: AccordionProps) => {
    const [state, setState] = useState(Array(items.length).fill(false))

    const toggle = (index: number) => {
        setState(state.map((_, i) => index === i
            ? !state[i]
            : state[i]
        ))
    }

    return (
        <ul className={styles.accordion}>
            {items.map((item, index) => (
                <li key={index}>
                    <button
                        className={styles.title}
                        data-open={state[index]}
                        onClick={() => toggle(index)}
                        dangerouslySetInnerHTML={{ __html: `${item.title} ${ArrowDown}` }}
                    />
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Accordion
