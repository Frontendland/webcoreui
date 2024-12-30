import type { ButtonProps, CardProps } from 'webcoreui/astro'

export type BlogCardProps = {
    href: string
    target?: ButtonProps['target']
    img: {
        src: string
        alt: string
        width: number
        height: number
        lazy?: boolean
    }
    title?: string
    text?: string
    secondary?: boolean
    className?: string
    [key: string]: any
} & CardProps
