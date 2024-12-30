export type TableProps = {
    headings?: string[]
    footer?: string[]
    data: string[][]
    hover?: boolean
    striped?: 'column' | 'row'
    offsetStripe?: boolean
    compact?: boolean
    maxHeight?: string
    className?: string
}
