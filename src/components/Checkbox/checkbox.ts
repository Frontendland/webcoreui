export type CheckboxProps = {
    checked?: boolean
    label?: string
    subText?: string
    disabled?: boolean
    color?: string
    className?: string
}

export type SvelteCheckboxProps = {
    onClick?: (key: any) => any
} & CheckboxProps

export type ReactCheckboxProps = {
    onClick?: (key: any) => any
} & CheckboxProps
