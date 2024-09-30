export type CheckboxProps = {
    checked?: boolean
    label?: string
    subText?: string
    disabled?: boolean
    color?: string
    className?: string
}

export type SvelteCheckboxProps = {
    onClick?: ((event: MouseEvent) => void) | null
} & CheckboxProps

export type ReactCheckboxProps = {
    onClick?: (event: React.MouseEvent) => void
} & CheckboxProps
