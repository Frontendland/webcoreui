import React, { useState } from 'react'
import type { AccordionProps } from './accordion'
import './accordion.scss'

export const Accordion = ({ items }: AccordionProps) => {
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
                    >
                        {item.title}
                        <img
                            src="/icons/arrow-down.svg"
                            alt="GitHub"
                            width={15}
                            height={15}
                        />
                    </div>
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
