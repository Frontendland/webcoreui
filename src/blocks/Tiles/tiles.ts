import type { ButtonProps, IconProps } from 'webcoreui/astro'

import type { BadgeBlockProps } from '@blocks/Button/button'

export type TilesProps = {
    columns?: 0 | 1 | 2 | 3 | 4
    items: {
        label: string
        subText?: string
        href?: string
        target?: ButtonProps['target']
        icon?: IconProps['type'] | string
        badge?: BadgeBlockProps
    }[]
}
