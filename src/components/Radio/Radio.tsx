import React from 'react'
import type { ReactRadioProps } from './radio'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import styles from './radio.module.scss'
import { classNames } from '../../utils/classNames'

const Radio = ({
    name,
    items,
    color,
    inline,
    className,
    onChange
}: ReactRadioProps) => {
    const classes = classNames([
        styles.radio,
        inline && styles.inline,
        className
    ])
    
    const style = color
        ? { '--w-radio-color': color } as React.CSSProperties
        : undefined

    return (
        <div className={classes} style={style}>
            {items.map((item, index) => (
                <label className={[
                    item.subText && styles.col,
                    item.disabled && styles.disabled
                ].filter(Boolean).join(' ')} key={index}>
                    <ConditionalWrapper
                        condition={!!(item.subText)}
                        wrapper={children => (
                            <div className={styles.wrapper}>
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
                        <span className={styles.icon} />
                        <span
                            className={styles.label}
                            dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                    </ConditionalWrapper>
                    {item.subText && (
                        <span
                            className={styles.subtext}
                            dangerouslySetInnerHTML={{ __html: item.subText }}
                        />
                    )}
                </label>
            ))}
        </div>
    )
}

export default Radio

