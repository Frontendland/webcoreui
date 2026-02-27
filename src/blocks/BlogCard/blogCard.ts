import type { ButtonProps, CardProps, ImageProps } from 'webcoreui/astro'

export type BlogCardProps = {
    href: string
    target?: ButtonProps['target']
    img: Omit<ImageProps, 'full' | 'center'>
    title?: string
    text?: string
    secondary?: boolean
    className?: string
    [key: string]: any
} & CardProps
