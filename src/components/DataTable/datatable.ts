import type { PaginationProps } from '../Pagination/pagination'

export type DataTableEventType = {
    results: string[][]
    numberOfResults: number
}

export type HeadingObject = {
    name: string
    sortable?: boolean
    toggleable?: boolean
    filterable?: boolean
}

export type DataTableProps = {
    headings?: (HeadingObject | string)[]
    filterPlaceholder?: string
    showFilterIcon?: boolean
    noResultsLabel?: string
    itemsPerPage?: number
    subText?: string
    columnToggleLabel?: string
    pagination?: PaginationProps
    data: string[][]
    hover?: boolean
    striped?: 'column' | 'row'
    offsetStripe?: boolean
    compact?: boolean
    maxHeight?: string
    className?: string
    id?: string
}
