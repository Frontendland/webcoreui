export type TableProps = {
    headings?: string[]
    footer?: string[]
    data: string[][]
    hover?: boolean
    striped?: 'column' | 'row' | null
    offsetStripe?: boolean
    compact?: boolean
    maxHeight?: number
    className?: string
}
