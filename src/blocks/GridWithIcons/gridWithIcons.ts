import type { IconProps } from 'webcoreui/astro'

export type GridWithIconsProps = {
    items: {
        icon?: IconProps['type'] | string
        title?: string
        text: string
    }[]
    columns?: 1 | 2 | 3 | 4
    alignment?: 'center' | 'right'
    iconWithBackground?: boolean
    secondary?: boolean
    className?: string
}
