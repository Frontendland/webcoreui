import type { InputTarget } from '../Input/input'

export type RadioProps = {
    items: {
        label: string
        value: string
        subText?: string
        selected?: boolean
        disabled?: boolean
    }[]
    name: string
    color?: string
    inline?: boolean
    className?: string
    [key: string]: any
}

export type SvelteRadioProps = {
    onChange?: (event: Event & InputTarget) => void
} & RadioProps

export type ReactRadioProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & RadioProps
