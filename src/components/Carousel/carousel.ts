import type { PaginationProps } from '../Pagination/pagination'

export type CarouselEventType = {
    from: string
    to: string
    current: string
}

export type CarouselProps = {
    items: number
    visibleItems?: number
    subText?: string
    autoplay?: boolean
    vertical?: boolean
    scrollSnap?: boolean
    progress?: boolean
    pagination?: PaginationProps
    effect?: 'opacity' | 'saturate'
    className?: string
    wrapperClassName?: string
    paginationClassName?: string
}

export type SvelteCarouselProps = {
    onScroll?: (event: CarouselEventType) => void
} & CarouselProps

export type ReactCarouselProps = {
    onScroll?: (event: CarouselEventType) => void
    children?: React.ReactNode
} & CarouselProps
