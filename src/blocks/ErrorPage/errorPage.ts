import type { ButtonProps, IconProps } from 'webcoreui/astro'

export type ErrorPageProps = {
    type: number
    typeColor?: string
    title: string
    subTitle?: string
    buttons?: ({
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps)[]
    [key: string]: any
}
