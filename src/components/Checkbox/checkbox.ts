import type { MouseEventHandler } from 'svelte/elements'

export type CheckboxProps = {
    checked?: boolean
    label?: string
    subText?: string
    disabled?: boolean
    color?: string
    className?: string
}

export type SvelteCheckboxProps = {
    onClick?: MouseEventHandler<HTMLInputElement>
} & CheckboxProps

export type ReactCheckboxProps = {
    onClick?: React.MouseEventHandler<HTMLInputElement>
} & CheckboxProps
