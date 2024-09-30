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
    onClick?: ((event: MouseEvent) => void) | null
} & SwitchProps

export type ReactSwitchProps = {
    onClick?: (event: React.MouseEvent) => void
} & SwitchProps
