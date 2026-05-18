import React from 'react'
import type { InputProps } from './input'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import styles from './input.module.scss'

export type ReactInputProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onInput?: (event: React.InputEvent<HTMLInputElement>) => void
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
    children?: React.ReactNode
} & InputProps

const Input = ({
    type = 'text',
    theme,
    label,
    subText,
    value,
    className,
    labelClassName,
    children,
    ...rest
}: ReactInputProps) => {
    const classes = classNames([
        styles.input,
        theme && styles[theme],
        className
    ])

    const labelClasses = classNames([
        styles['input-label'],
        labelClassName
    ])

    const useLabel = !!(label || subText || children)

    return (
        <ConditionalWrapper condition={useLabel} wrapper={children => (
            <label className={labelClasses}>
                {children}
            </label>
        )}>
            {label && (
                <div
                    className={styles.label}
                    dangerouslySetInnerHTML={{ __html: label }}
                />
            )}
            <ConditionalWrapper condition={!!children} wrapper={children => (
                <div className={styles.wrapper}>
                    {children}
                </div>
            )}>
                {children}
                <input
                    type={type}
                    className={classes}
                    defaultValue={value}
                    {...rest}
                />
            </ConditionalWrapper>
            {subText && (
                <div
                    className={styles.subtext}
                    dangerouslySetInnerHTML={{ __html: subText }}
                />
            )}
        </ConditionalWrapper>
    )
}

export default Input
