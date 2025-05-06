import type { ButtonProps, TableProps } from 'webcoreui/astro'

export type ExpandableTableProps = {
    numberOfVisibleRows?: number
    expandButtonLabel?: string
    collapseButtonLabel?: string
    expandButton?: ButtonProps
} & Omit<TableProps, 'footer'>
