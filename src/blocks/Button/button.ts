import type {
    BadgeProps,
    ButtonProps as WButtonProps,
    IconProps
} from 'webcoreui/astro'

type BaseProps = {
    text?: string
    icon?: IconProps['type'] | string
}

export type ButtonProps = {
    badge?: boolean
} & BaseProps & WButtonProps & BadgeProps

export type ButtonBlockProps = BaseProps & WButtonProps
export type BadgeBlockProps = BaseProps & BadgeProps
