import type { RatingProps } from 'webcoreui/astro'

export type UserProps = {
    avatar: string
    avatarSize?: number
    name: string
    role?: string
    roleTooltip?: string | null
    rating?: number
} & Omit<RatingProps, 'score'>
