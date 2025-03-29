import React from 'react'

import type { SEOProps } from './SEO'

const SEO = ({
    title,
    url,
    faviconUrl,
    description,
    canonical,
    prefetchGTAG,
    prefetchGA,
    noIndex,
    meta,
    links,
    structuredContents
}: SEOProps) => {
    return (
        <React.Fragment>
            <title>{title}</title>

            {prefetchGTAG && (
                <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
            )}

            {prefetchGA && (
                <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
            )}

            <link rel="icon" type="image/x-icon" href={faviconUrl} />
            <link rel="canonical" href={canonical || url} />

            {links?.map((link, index) => (
                <link key={index} {...link} />
            ))}

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content={description} />
            <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
            <meta name="og:url" content={url} />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {meta?.map((meta, index) => (
                <meta
                    key={index}
                    name={meta.name}
                    content={meta.content}
                />
            ))}

            {structuredContents?.filter(Boolean).map((structuredContent, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredContent, null, 0)
                    }}
                />
            ))}
        </React.Fragment>
    )
}

export default SEO
