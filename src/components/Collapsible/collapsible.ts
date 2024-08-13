export type CollapsibleProps = {
    initialHeight?: string
    maxHeight?: string
    toggled?: boolean
    className?: string
    togglesClassName?: string
}

export type ReactCollapsibleProps = {
    on: React.ReactNode
    off: React.ReactNode
    children?: React.ReactNode
} & CollapsibleProps

