export type SwitchProps = {
    label?: string
    reverse?: boolean
    toggled?: boolean
    disabled?: boolean
    small?: boolean
    square?: boolean
    onColor?: string
    offColor?: string
    className?: string
}

export type SvelteSwitchProps = {
    onClick?: (key: any) => any
} & SwitchProps

export type ReactSwitchProps = {
    onClick?: (key: any) => any
} & SwitchProps
