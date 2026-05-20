export type RadioProps<T extends object = object> = {
    items: {
        label: string
        value: string
        subText?: string
        selected?: boolean
        disabled?: boolean
        required?: boolean
    }[]
    color?: string
    inline?: boolean
    className?: string
} & T
