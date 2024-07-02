export type MenuProps = {
    items?: {
        url: string
        name: string
        target?: string
    }[]
    logo?: {
        url: string
        alt?: string
        width?: number
        height?: number
    } | null
    centerLogo?: boolean
    className?: string
}

export type ReactMenuProps = {
    children: React.ReactNode
} & MenuProps
