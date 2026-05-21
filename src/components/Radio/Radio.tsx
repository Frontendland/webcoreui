import React from 'react'
import type { RadioProps } from './radio'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import styles from './radio.module.scss'

export type Props = RadioProps<React.InputHTMLAttributes<HTMLInputElement>> & {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio = ({
    items,
    color,
    inline,
    className,
    onChange,
    ...rest
}: Props) => {
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
                <label className={classNames([
                    item.subText && styles.col,
                    item.disabled && styles.disabled
                ])} key={index}>
                    <ConditionalWrapper
                        condition={!!(item.subText)}
                        wrapper={children => (
                            <div className={styles.wrapper}>
                                {children}
                            </div>
                        )}
                    >
                        <input
                            {...rest}
                            type="radio"
                            value={item.value}
                            defaultChecked={item.selected}
                            disabled={item.disabled}
                            required={item.required}
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

