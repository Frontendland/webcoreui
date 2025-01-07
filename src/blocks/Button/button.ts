import type {
    BadgeProps,
    ButtonProps as WebcoreButtonProps,
    IconProps
} from 'webcoreui/astro'

export type ButtonProps = {
    icon?: IconProps['type'] | string
    text?: string
    badge?: boolean
    className?: string
} & WebcoreButtonProps & BadgeProps
