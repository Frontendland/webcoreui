import type { ChangeEventHandler, MouseEventHandler } from 'svelte/elements'

export type CheckboxProps = {
    checked?: boolean
    label?: string
    subText?: string
    disabled?: boolean
    color?: string
    className?: string
    [key: string]: any
}

export type SvelteCheckboxProps = {
    onChange?: ChangeEventHandler<HTMLInputElement>
    onClick?: MouseEventHandler<HTMLInputElement>
} & CheckboxProps

export type ReactCheckboxProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & CheckboxProps
