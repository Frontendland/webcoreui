import type { Snippet } from 'svelte'

export type CardProps = {
    element?: string
    title?: string
    titleTag?: string
    compact?: boolean
    className?: string
    bodyClassName?: string
    secondary?: boolean
    [key: string]: any
}

export type SvelteCardProps = {
    children: Snippet
} & CardProps

export type ReactCardProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<CardProps, 'titleTag' | 'element'>
