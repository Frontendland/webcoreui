import React from 'react'
import type { ReactCheckboxProps } from './checkbox'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import check from '../../icons/check.svg?raw'

import styles from './checkbox.module.scss'

const Checkbox = ({
    checked,
    label,
    subText,
    disabled,
    color,
    className,
    onClick
}: ReactCheckboxProps) => {
    const classes = classNames([
        styles.checkbox,
        label && subText && styles.col,
        className
    ])

    const style = color
        ? { '--w-checkbox-color': color } as React.CSSProperties
        : undefined

    return (
        <label className={classes} style={style}>
            <ConditionalWrapper
                condition={!!(label && subText)}
                wrapper={children => (
                    <div className={styles.wrapper}>
                        {children}
                    </div>
                )}
            >
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    disabled={disabled}
                    onClick={onClick}
                />
                <span
                    className={styles.check}
                    dangerouslySetInnerHTML={{ __html: check }}
                />
                {label && (
                    <span
                        className={styles.label}
                        dangerouslySetInnerHTML={{ __html: label }}
                    />
                )}
            </ConditionalWrapper>
            {label && subText && (
                <span
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: subText }}
                />
            )}
        </label>
    )
}

export default Checkbox
