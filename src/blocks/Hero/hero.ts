import type { AvatarWithRatingProps } from '@blocks/AvatarWithRating/avatarWithRating'
import type { BadgeBlockProps, ButtonBlockProps } from '@blocks/Button/button'

export type HeroProps = {
    badge?: BadgeBlockProps
    heading: string
    subHeading?: string
    buttons?: ButtonBlockProps[]
    avatarWithRating?: AvatarWithRatingProps
    image?: {
        src: string
        alt: string
        width: number
        height: number
    } | null
    reverse?: boolean
    className?: string
}
