import type { IconProps } from 'webcoreui/astro'

export type GridWithIconsProps = {
    items: {
        icon?: IconProps['type'] | string
        title?: string
        text: string
    }[]
    columns?: 1 | 2 | 3 | 4 | null
    alignment?: 'center' | 'right' | null
    iconWithBackground?: boolean
    secondary?: boolean
    className?: string
}
