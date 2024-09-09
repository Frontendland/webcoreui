import type { ButtonProps } from '../Button/button'

export type PaginationProps = {
    type?: 'arrows' | 'dots' | null
    showChevrons?: boolean
    showDots?: boolean
    disablePrevious?: boolean
    disableNext?: boolean
    previousLink?: string
    nextLink?: string
    previousPageLabel?: string
    nextPageLabel?: string
    className?: string
    theme?: ButtonProps['theme']
    totalPages?: number | null
    currentPage?: number | null
    pages?: {
        label: number | string
        active?: boolean
        link?: string
    }[]
}

export type SveltePaginationProps = {
    onChange?: (event: any) => void
} & PaginationProps

export type ReactPaginationProps = {
    onChange?: (event: any) => void
} & PaginationProps
