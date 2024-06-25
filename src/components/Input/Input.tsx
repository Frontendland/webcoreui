import React from 'react'
import type { ReactInputProps } from './input'
import ConditionalWrapper from '@components/ConditionalWrapper/ConditionalWrapper.tsx'

import './input.scss'

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
    const classes = [
        'w-input',
        theme,
        fill && 'fill',
        className
    ].filter(Boolean).join(' ')

    const useLabel = !!(label || subText || icon)

    return (
        <ConditionalWrapper condition={useLabel} wrapper={children => (
            <label className="w-input-label">
                {children}
            </label>
        )}>
            {label && (
                <div className="label">{label}</div>
            )}
            <ConditionalWrapper condition={!!icon} wrapper={children => (
                <div className="input-wrapper">
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
                    className="subtext"
                    dangerouslySetInnerHTML={{ __html: subText }}
                />
            )}
        </ConditionalWrapper>
    )
}

export default Input
