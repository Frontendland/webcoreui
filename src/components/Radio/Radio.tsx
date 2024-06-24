import React from 'react'
import type { ReactRadioProps } from './radio'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import './radio.scss'

const Radio = ({
    name,
    items,
    color,
    inline,
    className,
    onChange
}: ReactRadioProps) => {
    const classes = [
        'w-radio',
        inline && 'inline',
        className
    ].filter(Boolean).join(' ')
    
    const style = color
        ? { '--w-radio-color': color } as React.CSSProperties
        : undefined

    return (
        <div className={classes} style={style}>
            {items.map((item, index) => (
                <label className={[
                    item.subText && 'col',
                    item.disabled && 'disabled'
                ].filter(Boolean).join(' ')} key={index}>
                    <ConditionalWrapper
                        condition={!!(item.subText)}
                        wrapper={children => (
                            <div className="radio-wrapper">
                                {children}
                            </div>
                        )}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={item.value}
                            defaultChecked={item.selected}
                            disabled={item.disabled}
                            onChange={onChange}
                        />
                        <span className="radio" />
                        <span
                            className="label"
                            dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                    </ConditionalWrapper>
                    {item.subText && (
                        <span
                            className="sub-text"
                            dangerouslySetInnerHTML={{ __html: item.subText }}
                        />
                    )}
                </label>
            ))}
        </div>
    )
}

export default Radio

