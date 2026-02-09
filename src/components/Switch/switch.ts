import type { ChangeEventHandler, MouseEventHandler } from 'svelte/elements'

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
    onChange?: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
} & SwitchProps

export type ReactSwitchProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & SwitchProps
