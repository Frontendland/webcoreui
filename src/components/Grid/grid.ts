import type { Snippet } from 'svelte'

import type {
    Column,
    Gap,
    Responsive
} from '../../utils/getLayoutClasses'

export type GridProps = {
    element?: string
    gap?: Responsive<Gap>
    column?: Responsive<Column>
    className?: string
    [key: string]: any
}

export type SvelteGridProps = {
    children: Snippet
} & GridProps

export type ReactGridProps = {
    Element?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<GridProps, 'element'>
