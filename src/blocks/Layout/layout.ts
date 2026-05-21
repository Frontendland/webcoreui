import type { FooterProps, MenuProps } from 'webcoreui/astro'

import type { SEOProps } from '@blocks/SEO/SEO.ts'

export type LayoutProps = {
    seo: SEOProps
    lang?: string
    menu?: MenuProps
    footer?: FooterProps
    className?: string
    containerClassName?: string
    [key: string]: any
}

