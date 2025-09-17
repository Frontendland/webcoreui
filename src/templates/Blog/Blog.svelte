<script lang="ts">
    import type { SvelteBlogProps } from './blog'

    import Author from '@blocks/Author/Author.svelte'
    import BlogCard from '@blocks/BlogCard/BlogCard.svelte'
    import Hero from '@blocks/Hero/Hero.svelte'
    import Layout from '@blocks/Layout/Layout.svelte'
    import Tiles from '@blocks/Tiles/Tiles.svelte'

    import styles from './blog.module.scss'

    import { ConditionalWrapper } from 'webcoreui/svelte'

    const {
        layout,
        hero,
        tilesTitle = 'Explore',
        tiles,
        postsTitle = 'Latest Articles',
        posts,
        recommendedTitle = 'Recommended',
        recommended,
        authorTitle = 'About the Author',
        author,
        children,
        ...rest
    }: SvelteBlogProps = $props()
</script>

<Layout {...layout} {...rest} containerClassName="container flex column">
    {#snippet atf()}
        {#if hero}
            <div class={styles.hero}>
                <Hero {...hero} className={styles.container} />
            </div>
        {/if}
    {/snippet}

    {#if tiles?.items?.length}
        <ConditionalWrapper
            condition={!!tilesTitle}
            element="section"
        >
            {#if tilesTitle}
                <h2>{tilesTitle}</h2>
            {/if}
            <Tiles {...tiles} />
        </ConditionalWrapper>
    {/if}

    {#if !!posts?.length}
        <ConditionalWrapper condition={!!postsTitle}>
            {#if postsTitle}
                <h2>{postsTitle}</h2>
            {/if}
            <div class="grid sm-2 lg-3">
                {#each posts as post}
                    <BlogCard {...post} />
                {/each}
            </div>
        </ConditionalWrapper>
    {/if}

    <ConditionalWrapper
        condition={!!recommended?.length}
        element="section"
        class="flex column md-row"
    >
        {#if children}
            <section class={styles.main}>
                {@render children?.()}
            </section>
        {/if}
        {#if recommended?.length}
            <section class={styles.recommended}>
                <h2>{recommendedTitle}</h2>
                <div class="grid">
                    {#each recommended as post}
                        <BlogCard {...post} />
                    {/each}
                </div>
            </section>
        {/if}
    </ConditionalWrapper>

    {#if author}
        <div>
            <h2>{authorTitle}</h2>
            <Author {...author} />
        </div>
    {/if}
</Layout>
