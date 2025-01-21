<script lang="ts">
    import { classNames } from 'webcoreui'
    import { ConditionalWrapper, Footer, Menu } from 'webcoreui/svelte'

    import SEO from '@blocks/SEO/SEO.svelte'

    import type { SvelteLayoutProps } from './layout'
    import './layout.scss'

    const {
        seo,
        menu,
        footer,
        className,
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
        'container',
        hasSidebar && 'flex column sm-row',
        !hasSidebar && className
    ])
</script>

<html lang="en">
    <head>
        <SEO {...seo} />
    </head>
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
