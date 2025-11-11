import React, { useRef, useState } from 'react'
import type { ReactCounterProps } from './counter'

import { classNames } from '../../utils/classNames'

import minusIcon from '../../icons/minus.svg?raw'
import plusIcon from '../../icons/plus.svg?raw'

import styles from './counter.module.scss'

const Counter = ({
    type = 'compact',
    theme,
    rounded,
    minIcon,
    maxIcon,
    className,
    width,
    value = 0,
    disabled,
    onChange,
    step = 1,
    min,
    max,
    ...rest
}: ReactCounterProps) => {
    const [inputValue, setInputValue] = useState(value)
    const intervalId = useRef<ReturnType<typeof setTimeout> | null>(null)
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null)
    const longPressDelay = useRef(500)
    const isKeyDown = useRef(false)

    const classes = classNames([
        styles.counter,
        styles[type],
        theme && styles[theme],
        rounded && styles.rounded,
        className
    ])

    const subtractIcon = minIcon || minusIcon
    const addIcon = maxIcon || plusIcon

    const styleVariable = width
        ? { '--w-counter-width': width } as React.CSSProperties
        : undefined

    const updateValue = (isMin?: boolean) => {
        setInputValue((prevValue: number) => {
            const direction = isMin ? -1 : 1
            const newValue = prevValue + (direction * step)

            if ((min !== undefined && newValue < min) || (max !== undefined && newValue > max)) {
                return prevValue
            }

            onChange?.(newValue)
            return newValue
        })
    }

    const startHold = (event: React.MouseEvent | React.TouchEvent | React.KeyboardEvent) => {
        const target = event.currentTarget

        if (target instanceof HTMLButtonElement) {
            const isMin = target.dataset.id === 'w-counter-min'

            updateValue(isMin)

            timeoutId.current = setTimeout(function repeat() {
                updateValue(isMin)

                longPressDelay.current = Math.max(50, longPressDelay.current * 0.8)
                intervalId.current = setTimeout(repeat, longPressDelay.current)
            }, 500)
        }
    }

    const stopHold = () => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current)
        }

        if (intervalId.current) {
            clearTimeout(intervalId.current)
        }

        isKeyDown.current = false
        longPressDelay.current = 500
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !isKeyDown.current) {
            event.preventDefault()
            startHold(event)

            isKeyDown.current = true
        }
    }

    const handleKeyUp = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            stopHold()
        }
    }

    const handleInput = (event: React.FormEvent) => {
        const target = event.target

        if (target instanceof HTMLInputElement) {
            const newValue = Number(target.value)

            setInputValue(newValue)
            onChange?.(newValue)
        }
    }

    return (
        <div className={classes} style={styleVariable}>
            <button
                data-id="w-counter-min"
                disabled={disabled}
                onMouseDown={startHold}
                onTouchStart={startHold}
                onMouseUp={stopHold}
                onMouseLeave={stopHold}
                onTouchEnd={stopHold}
                onTouchCancel={stopHold}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                dangerouslySetInnerHTML={{ __html: subtractIcon }}
            />
            <input
                value={inputValue}
                type="number"
                disabled={disabled}
                step={step}
                min={min}
                max={max}
                onInput={handleInput}
                {...rest}
            />
            <button
                data-id="w-counter-max"
                disabled={disabled}
                onMouseDown={startHold}
                onTouchStart={startHold}
                onMouseUp={stopHold}
                onMouseLeave={stopHold}
                onTouchEnd={stopHold}
                onTouchCancel={stopHold}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                dangerouslySetInnerHTML={{ __html: addIcon }}
            />
        </div>

    )
}

export default Counter
