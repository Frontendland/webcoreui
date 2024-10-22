export type AspectRatioProps = {
    ratio: string
    className?: string
}

export type ReactAspectRatioProps = {
    children: React.ReactNode
} & AspectRatioProps
