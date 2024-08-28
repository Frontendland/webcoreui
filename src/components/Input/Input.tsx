import React from 'react'
import type { ReactInputProps } from './input'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import styles from './input.module.scss'
import { classNames } from '../../utils/classNames'

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
                <div className={styles.label}>{label}</div>
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
