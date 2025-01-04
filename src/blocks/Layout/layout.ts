import type { Snippet } from 'svelte'
import type { FooterProps, MenuProps } from 'webcoreui/astro'

import type { SEOProps } from '@blocks/SEO/SEO.ts'

export type LayoutProps = {
    seo: SEOProps
    menu?: MenuProps
    footer?: FooterProps
    className?: string
    [key: string]: any
}

export type SvelteLayoutProps = {
    insideMenu?: Snippet
    atf?: Snippet
    leftSidebar?: Snippet
    rightSidebar?: Snippet
    aboveFooter?: Snippet
    insideFooter?: Snippet
    scripts?: Snippet
    children?: Snippet
} & LayoutProps

export type ReactLayoutProps = {
    insideMenu?: React.ReactNode
    atf?: React.ReactNode
    leftSidebar?: React.ReactNode
    rightSidebar?: React.ReactNode
    aboveFooter?: React.ReactNode
    insideFooter?: React.ReactNode
    scripts?: React.ReactNode
    children?: React.ReactNode
} & LayoutProps
