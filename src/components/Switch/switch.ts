export type SwitchProps = {
    label?: string
    toggled?: boolean
    offColor?: string
    onColor?: string
    reverse?: boolean
    small?: boolean
    square?: boolean
    disabled?: boolean
    className?: string
}

export type ReactSwitchProps = {
    onClick?: (key: any) => any
} & SwitchProps
