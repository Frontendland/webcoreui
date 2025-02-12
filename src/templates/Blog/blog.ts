import type { Snippet } from 'svelte'

import type { AuthorProps } from '@blocks/Author/author'
import type { BlogCardProps } from '@blocks/BlogCard/blogCard'
import type { HeroProps } from '@blocks/Hero/hero'
import type { LayoutProps } from '@blocks/Layout/layout'
import type { TilesProps } from '@blocks/Tiles/tiles'

export type BlogProps = {
    layout: LayoutProps
    hero?: HeroProps
    tilesTitle?: string | null
    tiles?: TilesProps
    postsTitle?: string | null
    posts?: BlogCardProps[]
    recommendedTitle?: string | null
    recommended?: BlogCardProps[]
    authorTitle?: string
    author?: AuthorProps
    [key: string]: any
}

export type SvelteBlogProps = {
    children?: Snippet
} & BlogProps

export type ReactBlogProps = {
    children?: React.ReactNode
} & BlogProps
