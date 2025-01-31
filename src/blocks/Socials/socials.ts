import type { IconProps } from 'webcoreui/astro'

// You can find additional social icons on https://icons8.com/icon/set/social-media/material
export type SocialsProps = {
    links: string[]
    className?: string
} & Omit<IconProps, 'type' | 'iconSet'>
