export type SEOProps = {
    title: string
    url: string
    faviconUrl: string
    description: string
    canonical?: string
    prefetchGTAG?: boolean
    prefetchGA?: boolean
    noIndex?: boolean
    meta?: {
        name: string
        content: string
    }[]
    hrefLangs?: {
        hreflang: string
        href: string
    }[]
    structuredContents?: {
        [key: string]: any
    }[]
}
