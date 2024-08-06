import React from 'react'
import type { ReactSliderProps } from './slider'

import styles from './slider.module.scss'
import { classNames } from '../../utils/classNames'

const Slider = ({
    min,
    max,
    value,
    step,
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
            className={classes}
            id={id}
            style={styleVariables}
            onChange={onChange}
        />

    )
}

export default Slider
