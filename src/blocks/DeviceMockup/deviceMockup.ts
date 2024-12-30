import type { Snippet } from 'svelte'

export type DeviceMockupProps = {
    type?: 'desktop'
    url?: string
    showButtons?: boolean
    closeButtonColor?: string
    maximizeButtonColor?: string
    minimizeButtonColor?: string
    className?: string
}

export type SvelteDeviceMockupProps = {
    children: Snippet
} & DeviceMockupProps

export type ReactDeviceMockupProps = {
    children: React.ReactNode
} & DeviceMockupProps
