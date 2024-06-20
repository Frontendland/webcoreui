export type RadioProps = {
    items: {
        label: string
        subText?: string
        selected?: boolean
        disabled?: boolean
    }[]
    name: string
    color?: string
    inline?: boolean
    className?: string
}
