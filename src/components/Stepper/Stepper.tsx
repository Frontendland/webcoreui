import React from 'react'
import type { StepperProps } from './stepper'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import styles from './stepper.module.scss'

const Stepper = ({
    items,
    color,
    completedColor,
    activeColor,
    borderless,
    vertical,
    className
}: StepperProps) => {
    const classes = classNames([
        styles.stepper,
        borderless && styles.borderless,
        vertical && styles.vertical,
        className
    ])

    const styleVariables = {
        ...(color && { '--w-stepper-color-border': color }),
        ...(completedColor && { '--w-stepper-color-complete': completedColor }),
        ...(activeColor && { '--w-stepper-color-active': activeColor })
    } as React.CSSProperties

    return (
        <ol className={classes} style={styleVariables}>
            {items?.map((item, index) => (
                <li className={classNames([
                    index !== 0 && styles.connect,
                    item.active && styles.active,
                    item.completed && styles.completed
                ])} key={index}>
                    <span
                        className={styles.number}
                        dangerouslySetInnerHTML={{ __html: item.icon
                            ? item.icon
                            : index + 1
                        }}
                    />
                    <ConditionalWrapper
                        condition={!!(item.title && item.subTitle)}
                        wrapper={children => <div className={styles.container}>{children}</div>}
                    >
                        {item.title && <span>{item.title}</span>}
                        {item.subTitle && <span className={styles.muted}>{item.subTitle}</span>}
                    </ConditionalWrapper>
                </li>
            ))}
        </ol>
    )
}

export default Stepper
