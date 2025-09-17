<script lang="ts">
    // Use svelte:head outside of Astro
    import { classNames } from 'webcoreui'
    import { ConditionalWrapper, Footer, Menu } from 'webcoreui/svelte'

    import SEO from '@blocks/SEO/SEO.svelte'

    import type { SvelteLayoutProps } from './layout'
    import './layout.scss'

    const {
        seo,
        lang = 'en',
        menu,
        footer,
        className,
        containerClassName,
        insideMenu,
        atf,
        leftSidebar,
        rightSidebar,
        aboveFooter,
        insideFooter,
        scripts,
        children,
        ...rest
    }: SvelteLayoutProps = $props()

    const hasSidebar = leftSidebar || rightSidebar

    const containerClasses = classNames([
        containerClassName || 'container',
        hasSidebar && 'flex column sm-row'
    ])
</script>

<html lang={lang}>
    <!-- eslint-disable-next-line svelte/no-raw-special-elements -->
    <head>
        <SEO {...seo} />
    </head>
    <!-- eslint-disable-next-line svelte/no-raw-special-elements -->
    <body {...rest}>
        {#if menu}
            <Menu {...menu}>
                {@render insideMenu?.()}
            </Menu>
        {/if}
        {@render atf?.()}
        <main class={containerClasses}>
            {@render leftSidebar?.()}
            <ConditionalWrapper condition={!!hasSidebar} class={className}>
                {@render children?.()}
            </ConditionalWrapper>
            {@render rightSidebar?.()}
        </main>
        {@render aboveFooter?.()}
        {#if footer}
            <Footer {...footer}>
                {@render insideFooter?.()}
            </Footer>
        {/if}
        {@render scripts?.()}
    </body>
</html>
