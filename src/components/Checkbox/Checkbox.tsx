import React from 'react'
import type { ReactCheckboxProps } from './checkbox'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import check from '../../icons/check.svg?raw'

import styles from './checkbox.module.scss'

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
        styles.checkbox,
        boxed && styles.boxed,
        label && subText && styles.col
    ].filter(Boolean).join(' ')
    
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
