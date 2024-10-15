import type { IconProps } from 'webcoreui/astro'

export type IconListProps = {
    columns?: number
    color?: string
    items: {
        icon: IconProps['type'] | string
        text: string
        color?: string
    }[]
    className?: string
}
