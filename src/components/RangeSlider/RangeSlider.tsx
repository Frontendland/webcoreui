/* eslint-disable complexity */
import React, { useEffect, useRef, useState } from 'react'
import type { ReactRangeSliderProps } from './rangeslider'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'
import { interpolate } from '../../utils/interpolate'

import styles from './rangeslider.module.scss'

const RangeSlider = ({
    min = 0,
    max = 100,
    selectedMin,
    selectedMax,
    step = 1,
    minGap = 5,
    disabled,
    color,
    background,
    thumb,
    label,
    subText,
    minLabel,
    maxLabel,
    minIcon,
    maxIcon,
    interactiveLabels,
    updateLabels,
    className,
    onChange
}: ReactRangeSliderProps) => {
    const [minValue, setMinValue] = useState(selectedMin || min)
    const [maxValue, setMaxValue] = useState(selectedMax || max)
    const [dynamicMinLabel, setDynamicMinLabel] = useState(minLabel)
    const [dynamicMaxLabel, setDynamicMaxLabel] = useState(maxLabel)
    const rangeLeftPercent = useRef(interpolate(minValue || min, [min, max], [0, 100]))
    const rangeRightPercent = useRef(interpolate(maxValue || max, [min, max], [100, 0]))

    const minLabelWidth = `${String(max).length}ch`
    const labelStyle = updateLabels ? { minWidth: minLabelWidth } as React.CSSProperties : undefined

    const styleVariables = {
        ...(color && { '--w-range-slider-color': color }),
        ...(background && { '--w-range-slider-background': background }),
        ...(thumb && { '--w-range-slider-thumb': thumb })
    } as React.CSSProperties

    const updateDynamicLabels = (minValue: number, maxValue: number) => {
        if (dynamicMinLabel && dynamicMaxLabel) {
            setDynamicMinLabel(dynamicMinLabel.replace(/\d+(\.\d+)?/, String(minValue)))
            setDynamicMaxLabel(dynamicMaxLabel.replace(/\d+(\.\d+)?/, String(maxValue)))
        }
    }

    const handleInput = (event: React.FormEvent) => {
        const target = event.target

        if (!(target instanceof HTMLInputElement)) {
            return
        }

        const value = Number(target.value)

        let currentMin = target.dataset.min ? value : minValue
        let currentMax = target.dataset.max ? value : maxValue

        if (currentMax - currentMin >= minGap) {
            if (updateLabels) {
                updateDynamicLabels(currentMin, currentMax)
            }

            onChange?.({
                min: currentMin,
                max: currentMax
            })
        } else if (target.dataset.min) {
            currentMin = currentMax - Math.max(step, minGap)
            target.value = String(currentMin)
        } else {
            currentMax = currentMin + Math.max(step, minGap)
            target.value = String(currentMax)
        }

        setMinValue(currentMin)
        setMaxValue(currentMax)
    }

    const handleClick = (event: React.MouseEvent, direction: 'left' | 'right') => {
        const target = event.currentTarget

        if (!(target instanceof HTMLButtonElement)) {
            return
        }

        const dir = direction === 'left' ? -1 : 1
        const updatedMinValue = Number(minValue) + (dir * step)
        const updatedMaxValue = Number(maxValue) + (dir * step)

        if (updatedMinValue < min || updatedMaxValue > max) {
            return
        }

        setMinValue(updatedMinValue)
        setMaxValue(updatedMaxValue)

        if (updateLabels) {
            updateDynamicLabels(updatedMinValue, updatedMaxValue)
        }

        onChange?.({
            min: updatedMinValue,
            max: updatedMaxValue
        })
    }

    useEffect(() => {
        const minAdjust = minValue > (max / 2) ? -1 : 1
        const maxAdjust = maxValue < (max / 2) ? 1 : -1

        rangeLeftPercent.current = interpolate((minValue || min) + minAdjust, [min, max], [0, 100])
        rangeRightPercent.current = interpolate((maxValue || max) + maxAdjust, [min, max], [100, 0])
    }, [minValue, maxValue])

    return (
        <ConditionalWrapper
            condition={!!(label || subText)}
            wrapper={children => (
                <label className={classNames([styles.label, className])}>{children}</label>
            )}
        >
            {label && <span>{label}</span>}

            <div
                className={classNames([styles.container, !(label && subText) && className])}
                style={styleVariables}
            >
                <ConditionalWrapper
                    condition={!!interactiveLabels}
                    wrapper={children => (
                        <button onClick={(e: React.MouseEvent) => handleClick(e, 'left')}>{children}</button>
                    )}
                >
                    {minIcon && (
                        <span
                            dangerouslySetInnerHTML={{ __html: minIcon }}
                            style={{ height: 18 }}
                        />
                    )}
                    {dynamicMinLabel && <span style={labelStyle}>{dynamicMinLabel}</span>}
                </ConditionalWrapper>

                <div className={styles.slider}>
                    <div
                        data-disabled={disabled ? 'true' : undefined}
                        className={styles.range}
                        style={{
                            left: `${rangeLeftPercent.current}%`,
                            right: `${rangeRightPercent.current}%`
                        }}
                    />
                    <input
                        type="range"
                        className={classNames([styles.input, styles.min])}
                        min={min}
                        max={max}
                        value={minValue}
                        step={step}
                        disabled={disabled}
                        onInput={handleInput}
                        data-min="true"
                    />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        className={styles.input}
                        value={maxValue}
                        step={step}
                        disabled={disabled}
                        onInput={handleInput}
                        data-max="true"
                    />
                </div>

                <ConditionalWrapper
                    condition={!!interactiveLabels}
                    wrapper={children => (
                        <button onClick={(e: React.MouseEvent) => handleClick(e, 'right')}>{children}</button>
                    )}
                >
                    {maxIcon && (
                        <span
                            dangerouslySetInnerHTML={{ __html: maxIcon }}
                            style={{ height: 18 }}
                        />
                    )}
                    {dynamicMaxLabel && <span style={labelStyle}>{dynamicMaxLabel}</span>}
                </ConditionalWrapper>
            </div>

            {subText && <span className="muted">{subText}</span>}
        </ConditionalWrapper>
    )
}

export default RangeSlider
