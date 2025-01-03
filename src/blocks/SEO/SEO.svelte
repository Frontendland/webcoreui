<script lang="ts">
    import { getStructuredContent } from './getStructuredContent'
    import type { SEOProps } from './SEO'

    const {
        title,
        url,
        faviconUrl,
        description,
        canonical,
        prefetchGTAG,
        prefetchGA,
        noIndex,
        meta,
        hrefLangs,
        structuredContents
    }: SEOProps = $props()
</script>

<title>{title}</title>

{#if prefetchGTAG}
    <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
{/if}

{#if prefetchGA}
    <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
{/if}

<link rel="icon" type="image/x-icon" href={faviconUrl} />
<link rel="canonical" href={canonical || url} />

{#if hrefLangs}
    {#each hrefLangs as hrefLang}
        <link
            rel="alternate"
            hreflang={hrefLang.hreflang}
            href={hrefLang.href}
        />
    {/each}
{/if}

<meta charset="utf-8" />
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

{#if meta}
    {#each meta as meta}
        <meta name={meta.name} content={meta.content} />
    {/each}
{/if}

{#if structuredContents}
    {#each structuredContents.filter(Boolean) as structuredContent}
        {@html getStructuredContent(structuredContent)}
    {/each}
{/if}
