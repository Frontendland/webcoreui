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
    onChange?: (e: any) => any
} & SliderProps

export type ReactSliderProps = {
    onChange?: (e: any) => any
} & SliderProps
