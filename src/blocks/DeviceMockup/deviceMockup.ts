export type DeviceMockupProps = {
    type?: 'desktop' | null
    url?: string
    showButtons?: boolean
    closeButtonColor?: string
    maximizeButtonColor?: string
    minimizeButtonColor?: string
    className?: string
}

export type ReactDeviceMockupProps = {
    children: React.ReactNode
} & DeviceMockupProps
