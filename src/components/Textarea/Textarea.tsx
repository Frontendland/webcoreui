import React from 'react'
import type { TextareaProps } from './textarea'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import styles from './textarea.module.scss'

export type ReactTextareaProps = {
    onInput?: (event: React.InputEvent<HTMLTextAreaElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
} & TextareaProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>

const Textarea = ({
    label,
    subText,
    value = '',
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
                {...rest}
                className={classes}
                defaultValue={value}
            />
        </ConditionalWrapper>
    )
}

export default Textarea
