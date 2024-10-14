import type { ButtonProps, IconProps } from 'webcoreui/astro'

export type TilesProps = {
    columns?: 0 | 1 | 2 | 3 | 4
    items: {
        label: string
        href: string
        target?: ButtonProps['target']
        icon?: IconProps['type'] | string
    }[]
}
