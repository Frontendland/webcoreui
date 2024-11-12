export type RibbonProps = {
    offset?: number
    type?: 'folded' | null
    theme?: 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
        | undefined
    className?: string
}

export type ReactRibbonProps = {
    children: React.ReactNode
} & RibbonProps
