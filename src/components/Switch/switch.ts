export type SwitchProps<T extends object = object> = {
    label?: string
    reverse?: boolean
    toggled?: boolean
    small?: boolean
    square?: boolean
    onColor?: string
    offColor?: string
    className?: string
} & T
