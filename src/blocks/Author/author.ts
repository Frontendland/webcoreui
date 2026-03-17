import type { AvatarProps, CardProps } from 'webcoreui/astro'

import type { SocialsProps } from '@blocks/Socials/socials'

export type AuthorProps = {
    name: string
    role: string
    description: string
    socials?: SocialsProps
    avatar: AvatarProps
} & CardProps
