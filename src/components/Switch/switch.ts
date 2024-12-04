import type { MouseEventHandler } from 'svelte/elements'

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
    [key: string]: any
}

export type SvelteSwitchProps = {
    onClick?: MouseEventHandler<HTMLInputElement>
} & SwitchProps

export type ReactSwitchProps = {
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & SwitchProps
