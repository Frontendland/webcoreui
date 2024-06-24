export type CheckboxProps = {
    checked?: boolean
    label?: string
    subText?: string
    disabled?: boolean
    boxed?: boolean
    color?: string
}

export type ReactCheckboxProps = {
    onClick?: (key: any) => any
} & CheckboxProps
