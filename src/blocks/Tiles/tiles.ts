import type { ButtonProps, IconProps } from 'webcoreui/astro'

export type TilesProps = {
    columns?: number
    items: {
        label: string
        href: string
        target?: ButtonProps['target']
        icon?: IconProps['type'] | string
    }[]
}
