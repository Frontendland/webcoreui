import type {
    ButtonProps,
    IconProps
} from 'webcoreui/astro'

export type EmptyProps = {
    icon?: IconProps['type'] | string
    iconWithBackground?: boolean
    title: string
    text: string
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    className?: string
}
