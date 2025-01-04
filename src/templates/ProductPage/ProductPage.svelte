<script lang="ts">
    import type { SvelteProductPageProps } from './productPage'

    import BlogCard from '@blocks/BlogCard/BlogCard.svelte'
    import Button from '@blocks/Button/Button.svelte'
    import IconList from '@blocks/IconList/IconList.svelte'
    import Layout from '@blocks/Layout/Layout.svelte'

    import styles from './product-page.module.scss'

    import { Carousel } from 'webcoreui/svelte'

    const {
        layout,
        images,
        carousel,
        buttons,
        features,
        recommended,
        children,
        ...rest
    }: SvelteProductPageProps = $props()
</script>

<Layout {...layout} {...rest} className={styles.main}>
    {#snippet atf()}
        {#if images?.length}
            <Carousel
                {...carousel}
                items={images.length}
                className={styles.container}
                wrapperClassName={styles.carousel}
            >
                {#each images as img}
                    <li>
                        <img
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            loading={img.lazy ? 'lazy' : undefined}
                        />
                    </li>
                {/each}
            </Carousel>
        {/if}
    {/snippet}

    {@render children?.()}

    {#snippet rightSidebar()}
        {#if buttons?.length || features?.length}
            <aside class={styles.sidebar}>
                {#if buttons?.length}
                    <div class="grid sm">
                        {#each buttons as button}
                            <Button {...button} />
                        {/each}
                    </div>
                {/if}
                {#if features?.length}
                    <hr class={styles.separator} />
                    <IconList items={features} />
                {/if}
            </aside>
        {/if}
    {/snippet}

    {#snippet aboveFooter()}
        {#if recommended?.items?.length}
            <section class="container">
                <h2>{recommended.title || 'Recommended'}</h2>
                <div class="grid sm-3">
                    {#each recommended.items as item}
                        <BlogCard {...item} />
                    {/each}
                </div>
            </section>
        {/if}
    {/snippet}
</Layout>
