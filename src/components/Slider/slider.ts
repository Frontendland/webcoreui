export type SliderProps = {
    min: number
    max: number
    value?: number
    step?: number
    id?: string
    color?: string
    background?: string
    thumb?: string
    className?: string
}

export type SvelteSliderProps = {
    onChange?: (e: any) => any
} & SliderProps

export type ReactSliderProps = {
    onChange?: (e: any) => any
} & SliderProps
