export type BannerProps = {
    top?: number
    bottom?: boolean
    closeable?: boolean
    padded?: boolean
    sticky?: boolean
    className?: string
}

export type ReactBannerProps = {
    children: React.ReactNode
} & BannerProps
