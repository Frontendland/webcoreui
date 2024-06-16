import React, { useState } from 'react'
import type { AccordionProps } from './accordion'
import ArrowDown from '../../icons/arrow-down.svg?raw'
import './accordion.scss'

const Accordion = ({ items }: AccordionProps) => {
    const [state, setState] = useState(Array(items.length).fill(false))

    const toggle = (index: number) => {
        setState(state.map((_, i) => index === i
            ? !state[i]
            : state[i]
        ))
    }

    return (
        <ul data-id="accordion">
            {items.map((item, index) => (
                <li key={index}>
                    <div
                        className={state[index] ? 'accordion-title open' : 'accordion-title'}
                        onClick={() => toggle(index)}
                        dangerouslySetInnerHTML={{ __html: `${item.title} ${ArrowDown}` }}
                    />
                    <div className="accordion-wrapper">
                        <div className="accordion-content">
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Accordion
