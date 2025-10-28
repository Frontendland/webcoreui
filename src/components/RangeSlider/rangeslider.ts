import type { IconProps } from '../Icon/icon'

export type RangeSliderEventType = {
    min: number
    max: number
}

export type RangeSliderProps = {
    min?: number
    max?: number
    selectedMin?: number
    selectedMax?: number
    step?: number
    minGap?: number
    disabled?: boolean
    color?: string
    background?: string
    thumb?: string
    label?: string
    subText?: string
    minLabel?: string
    maxLabel?: string
    minIcon?: IconProps['type'] | string
    maxIcon?: IconProps['type'] | string
    interactiveLabels?: boolean
    updateLabels?: boolean
    className?: string
}

export type SvelteRangeSliderProps = {
    onChange?: (event: RangeSliderEventType) => void
} & RangeSliderProps

export type ReactRangeSliderProps = {
    onChange?: (event: RangeSliderEventType) => void
} & RangeSliderProps

