import type { IconProps } from 'webcoreui/astro'

export type CustomIconProps = {
    type: 'astro'
    | 'components'
    | 'config'
    | 'cookie'
    | 'discord'
    | 'drag'
    | 'edit'
    | 'file'
    | 'lock'
    | 'lock-open'
    | 'react'
    | 'rocket'
    | 'svelte'
    | 'swatches'
    | 'terminal'
    | IconProps['type']
} & Omit<IconProps, 'type'>
