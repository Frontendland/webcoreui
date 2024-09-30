import type { ButtonProps } from '../Button/button'

export type FooterProps = {
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        eager?: boolean
        html?: string
    } | null
    columns?: {
        title?: string
        items: {
            href: string
            name: string
            target?: ButtonProps['target']
            active?: boolean
        }[]
    }[]
    subText?: string
    className?: string
    wrapperClassName?: string
    subTextClassName?: string
}

export type ReactFooterProps = {
    children?: React.ReactNode
} & FooterProps
