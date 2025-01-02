import type {
    BadgeProps,
    ButtonProps,
    IconProps
} from 'webcoreui/astro'

export type HeroProps = {
    heading: string
    subHeading?: string
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    badge?: {
        text: string
    } & BadgeProps | null
    image?: {
        src: string
        alt: string
        width: number
        height: number
    } | null
    reverse?: boolean
    className?: string
}
