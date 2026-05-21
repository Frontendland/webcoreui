import React from 'react'
import type { CheckboxProps } from './checkbox'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import check from '../../icons/check.svg?raw'

import styles from './checkbox.module.scss'

export type Props = CheckboxProps<React.InputHTMLAttributes<HTMLInputElement>> & {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
}

const Checkbox = ({
    checked,
    label,
    subText,
    color,
    className,
    ...rest
}: Props) => {
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
                    {...rest}
                    type="checkbox"
                    defaultChecked={checked}
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
