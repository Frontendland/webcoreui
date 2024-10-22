export type SpoilerProps = {
    color?: string
    animated?: boolean
    block?: boolean
    tooltip?: string
    tooltipPosition?: 'bottom' | null
}

export type ReactSpoilerProps = {
    children: React.ReactNode
} & SpoilerProps
