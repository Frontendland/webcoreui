import type { AvatarProps, CardProps } from 'webcoreui/astro'

export type TeamProps = {
    members: {
        img?: string
        name: string
        role?: string
        description?: string
        socials?: string[]
    }[]
    avatar?: Pick<AvatarProps, 'size' | 'lazy' | 'borderColor'>
    columns?: 1 | 2 | 3 | 4,
    className?: string
} & Pick<CardProps, 'compact' | 'secondary'>
