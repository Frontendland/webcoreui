import type { Snippet } from 'svelte'

import type { Responsive } from '../../utils/getLayoutClasses'

import type { PaginationProps } from '../Pagination/pagination'

export type CarouselProps = {
    items: number
    itemsPerSlide?: number | Responsive<number>
    subText?: string
    autoplay?: boolean
    vertical?: boolean
    scrollSnap?: boolean
    progress?: boolean
    pagination?: PaginationProps
    effect?: 'opacity' | 'saturate' | null
    debounce?: number
    className?: string
    wrapperClassName?: string
    paginationClassName?: string
}

export type SvelteCarouselProps = {
    onScroll?: (event: number) => void
    children: Snippet
} & CarouselProps

export type ReactCarouselProps = {
    onScroll?: (event: number) => void
    children?: React.ReactNode
} & CarouselProps
