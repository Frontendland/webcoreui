import React, { useState } from 'react'
import type { OTPInputProps } from './otpinput'

import Input from '../Input/Input.tsx'

import { classNames } from '../../utils/classNames'

import styles from './otpinput.module.scss'

const OTPInput = ({
    name,
    disabled,
    length = 6,
    groupLength = 0,
    separator = '•',
    label,
    subText,
    className,
    value,
    onChange,
    ...rest
}: OTPInputProps) => {
    const [inputValue, setValue] = useState(value || '')

    const classes = classNames([
        styles.wrapper,
        className
    ])

    const inputPlaceholders = Array.from({ length }, (_, i) => i + 1)
        .reduce<(number | string)[]>((acc, num, i) =>
            groupLength > 0 && i % groupLength === 0 && i !== 0
                ? [...acc, separator, num]
                : [...acc, num]
        , [])

    const getAdjustedIndex = (index: number) => inputPlaceholders
        .slice(0, index)
        .filter(placeholder => typeof placeholder !== 'string')
        .length

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        onChange?.(inputValue)
    }

    return (
        <div className={classes}>
            {label && (
                <label
                    htmlFor={name}
                    className={styles.label}
                    dangerouslySetInnerHTML={{ __html: label }}
                />
            )}

            <div className={styles['input-wrapper']}>
                <Input
                    name={name || 'otp'}
                    disabled={disabled}
                    maxLength={length}
                    required={true}
                    value={inputValue}
                    onChange={updateInput}
                    {...rest}
                />

                <div className={styles.placeholders}>
                    {inputPlaceholders.map((placeholder, index) => (
                        <div
                            key={index}
                            className={typeof placeholder === 'string' ? styles.separator : styles.placeholder}
                            data-active={getAdjustedIndex(index) === inputValue.length ? true : undefined}
                        >
                            {typeof placeholder === 'string'
                                ? placeholder
                                : inputValue[getAdjustedIndex(index)]}
                        </div>
                    ))}
                </div>
            </div>

            {subText && (
                <div
                    className={styles.subtext}
                    dangerouslySetInnerHTML={{ __html: subText }}
                />
            )}
        </div>
    )
}

export default OTPInput
