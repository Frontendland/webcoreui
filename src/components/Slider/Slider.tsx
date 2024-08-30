import React from 'react'
import type { ReactSliderProps } from './slider'

import { classNames } from '../../utils/classNames'

import styles from './slider.module.scss'

const Slider = ({
    min,
    max,
    value,
    step,
    disabled,
    color,
    background,
    thumb,
    id,
    className,
    onChange
}: ReactSliderProps) => {
    const classes = classNames([
        styles.slider,
        className
    ])

    const styleVariables = {
        ...(color && { '--w-slider-color': color }),
        ...(background && { '--w-slider-background': background }),
        ...(thumb && { '--w-slider-thumb': thumb })
    } as React.CSSProperties

    return (
        <input
            type="range"
            min={min}
            max={max}
            defaultValue={value || min}
            step={step}
            disabled={disabled}
            className={classes}
            id={id}
            style={styleVariables}
            onChange={onChange}
        />

    )
}

export default Slider
