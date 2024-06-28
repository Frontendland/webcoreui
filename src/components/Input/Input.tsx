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
    fill,
    icon,
    value,
    className,
    ...rest
}: ReactInputProps) => {
    const classes = classNames([
        styles.input,
        theme && styles[theme],
        fill && styles.fill,
        className
    ])

    const useLabel = !!(label || subText || icon)

    return (
        <ConditionalWrapper condition={useLabel} wrapper={children => (
            <label className={styles['input-label']}>
                {children}
            </label>
        )}>
            {label && (
                <div className={styles.label}>{label}</div>
            )}
            <ConditionalWrapper condition={!!icon} wrapper={children => (
                <div className={styles.wrapper}>
                    {children}
                </div>
            )}>
                {icon && icon}
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
