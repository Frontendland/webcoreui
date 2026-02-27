import type { ImageProps } from 'webcoreui/astro'

import type { AvatarWithRatingProps } from '@blocks/AvatarWithRating/avatarWithRating'
import type { BadgeBlockProps, ButtonBlockProps } from '@blocks/Button/button'

export type HeroProps = {
    badge?: BadgeBlockProps
    heading: string
    subHeading?: string
    buttons?: ButtonBlockProps[]
    avatarWithRating?: AvatarWithRatingProps
    img?: ImageProps
    reverse?: boolean
    className?: string
}
