import React from 'react'
import type { SliderProps } from './slider'

import { classNames } from '../../utils/classNames'

import styles from './slider.module.scss'

export type ReactSliderProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & SliderProps

const Slider = ({
    min = 0,
    max = 100,
    value = 0,
    step,
    disabled,
    color,
    background,
    thumb,
    id,
    className,
    onChange,
    ...rest
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
            {...rest}
        />

    )
}

export default Slider
