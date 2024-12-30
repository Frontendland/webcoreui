import type { Snippet } from 'svelte'

export type BannerProps = {
    top?: number
    bottom?: boolean
    closeable?: boolean
    padded?: boolean
    sticky?: boolean
    className?: string
}

export type SvelteBannerProps = {
    children: Snippet
} & BannerProps

export type ReactBannerProps = {
    children: React.ReactNode
} & BannerProps
