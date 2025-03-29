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
    links?: {
        crossOrigin?: 'anonymous' | 'use-credentials'
        fetchPriority?: 'high' | 'low' | 'auto'
        href?: string
        hrefLang?: string
        integrity?: string
        media?: string
        imageSrcSet?: string
        imageSizes?: string
        sizes?: string
        type?: string
        charSet?: string
        as?: 'fetch'
            | 'audio'
            | 'audioworklet'
            | 'document'
            | 'embed'
            | 'font'
            | 'frame'
            | 'iframe'
            | 'image'
            | 'json'
            | 'manifest'
            | 'object'
            | 'paintworklet'
            | 'report'
            | 'script'
            | 'serviceworker'
            | 'sharedworker'
            | 'style'
            | 'track'
            | 'video'
            | 'webidentity'
            | 'worker'
            | 'xslt'
        referrerPolicy?: 'no-referrer'
            | 'no-referrer-when-downgrade'
            | 'origin'
            | 'origin-when-cross-origin'
            | 'same-origin'
            | 'strict-origin'
            | 'strict-origin-when-cross-origin'
            | 'unsafe-url'
    }[]
    structuredContents?: {
        [key: string]: any
    }[]
}
