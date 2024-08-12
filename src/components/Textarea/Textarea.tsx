import React from 'react'
import type { ReactTextareaProps } from './textarea'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import styles from './textarea.module.scss'
import { classNames } from '../../utils/classNames'

const Textarea = ({
    label,
    placeholder,
    subText,
    value = '',
    disabled,
    className,
    ...rest
}: ReactTextareaProps) => {
    const classes = classNames([
        styles.textarea,
        className
    ])

    const useLabel = !!(label || subText)

    return (
        <ConditionalWrapper condition={useLabel} wrapper={children => (
            <label className={styles['label-wrapper']}>
                {label && (
                    <div className={styles.label}>{label}</div>
                )}
                {children}
                {subText && (
                    <div
                        className={styles.subtext}
                        dangerouslySetInnerHTML={{ __html: subText }}
                    />
                )}
            </label>
        )}>
            <textarea
                placeholder={placeholder}
                disabled={disabled}
                className={classes}
                defaultValue={value}
                {...rest}
            />
        </ConditionalWrapper>
    )
}

export default Textarea
