import React from 'react'
import type { CheckboxProps } from './checkbox'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import check from '../../icons/check.svg?raw'

import './checkbox.scss'

type ReactCheckboxProps = {
    onClick?: () => any
} & CheckboxProps

const Checkbox = ({
    checked,
    label,
    subText,
    disabled,
    boxed,
    color,
    onClick
}: ReactCheckboxProps) => {
    const classes = [
        'w-checkbox',
        boxed && 'boxed',
        label && subText && 'col'
    ].filter(Boolean).join(' ')
    
    const style = color
        ? { '--w-checkbox-color': color } as React.CSSProperties
        : undefined

    return (
        <label className={classes} style={style} onClick={onClick}>
            <ConditionalWrapper
                condition={!!(label && subText)}
                wrapper={children => (
                    <div className="checkbox-wrapper">
                        {children}
                    </div>
                )}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                />
                <span
                    className="check"
                    dangerouslySetInnerHTML={{ __html: check }}
                />
                {label && (
                    <span
                        className="label"
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                )}
            </ConditionalWrapper>
            {label && subText && (
                <span
                    className="sub-text"
                    dangerouslySetInnerHTML={{ __html: subText }}
                />
            )}
        </label>
    )
}

export default Checkbox