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
}

export type SvelteRadioProps = {
    onChange?: (key: any) => any
} & RadioProps

export type ReactRadioProps = {
    onChange?: (key: any) => any
} & RadioProps
