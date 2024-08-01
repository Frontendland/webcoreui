export type MenuProps = {
    items?: {
        url: string
        name: string
        target?: string
        active?: boolean
    }[]
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        html?: string
    } | null
    centerLogo?: boolean
    className?: string
    wrapperClassName?: string
}

export type ReactMenuProps = {
    children?: React.ReactNode
} & MenuProps
