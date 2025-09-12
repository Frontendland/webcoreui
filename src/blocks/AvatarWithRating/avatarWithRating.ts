import type { AvatarProps, RatingProps } from 'webcoreui/astro'

export type AvatarWithRatingProps = {
    avatar: AvatarProps
    rating: RatingProps
    text?: string
    reverse?: boolean
    className?: string
}
