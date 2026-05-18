export type RadioProps = {
    items: {
        label: string
        value: string
        subText?: string
        selected?: boolean
        disabled?: boolean
        required?: boolean
    }[]
    name: string
    color?: string
    inline?: boolean
    className?: string
    [key: string]: any
}
