import type { InputTarget } from '../Input/input'

export type SliderProps = {
    min: number
    max: number
    value?: number
    step?: number
    disabled?: boolean
    color?: string
    background?: string
    thumb?: string
    id?: string
    className?: string
}

export type SvelteSliderProps = {
    onChange?: (event: Event & InputTarget) => void
} & SliderProps

export type ReactSliderProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & SliderProps
