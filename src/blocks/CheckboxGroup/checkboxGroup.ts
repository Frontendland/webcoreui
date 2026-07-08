import type { CardProps, IconProps } from 'webcoreui/astro'

export type CheckboxGroupProps = {
    items: {
        icon?: IconProps['type'] | string
        label: string
        subText?: string
        value: string
        checked?: boolean
        disabled?: boolean
    }[]
    name: string
    columns?: 1 | 2 | 3 | 4
    className?: string
} & CardProps
