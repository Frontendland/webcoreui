<script lang="ts">
    import type { PortfolioProps } from './portfolio'

    import BlogCard from '@blocks/BlogCard/BlogCard.svelte'
    import Button from '@blocks/Button/Button.svelte'
    import GridWithIcons from '@blocks/GridWithIcons/GridWithIcons.svelte'
    import Hero from '@blocks/Hero/Hero.svelte'
    import IconList from '@blocks/IconList/IconList.svelte'
    import Layout from '@blocks/Layout/Layout.svelte'

    import styles from './portfolio.module.scss'

    import { classNames } from 'webcoreui'
    import { ConditionalWrapper, Rating } from 'webcoreui/svelte'

    const {
        layout,
        hero,
        aboutMe,
        ratings,
        ratingsOnCta,
        ratingsOffCta,
        hideRatingsAfter = 3,
        myWork,
        servicesTitle,
        services,
        servicesCta,
        ...rest
    }: PortfolioProps = $props()

    let toggled = $state(false)
</script>

<Layout {...layout} {...rest} containerClassName="container flex column">
    {#if hero}
        <Hero {...hero} />
    {/if}

    <section class={styles.me}>
        <h2 class={styles.title}>{aboutMe.title || 'About Me'}</h2>
        <ConditionalWrapper
            condition={!!(aboutMe.img?.src || aboutMe.services?.length)}
            class="flex column md-row"
        >
            {#if aboutMe.img?.src}
                <img
                    src={aboutMe.img.src}
                    alt={aboutMe.img.alt}
                    width={aboutMe.img.width}
                    height={aboutMe.img.height}
                    class={styles.img}
                />
            {/if}
            <ConditionalWrapper
                condition={!!(aboutMe.text && aboutMe.services?.length)}
                class="flex column"
            >
                <div class={styles.about}>
                    {@html aboutMe.text}
                </div>
                {#if aboutMe.services?.length}
                    <IconList items={aboutMe.services} columns={2} />
                {/if}
            </ConditionalWrapper>
        </ConditionalWrapper>

        {#if ratings?.length}
            <ul class={classNames([styles.ratings, 'grid sm-3 items-start'])}>
                {#each ratings as rating, index}
                    <li class="grid xs" data-hidden={(index >= hideRatingsAfter && !toggled) ? 'true' : null}>
                        <Rating {...(({ feedback, ...rest }) => rest)(rating)} />
                        <span class="muted">
                            {@html rating.feedback}
                        </span>
                    </li>
                {/each}
            </ul>

            {#if ratings.length > hideRatingsAfter}
                <Button
                    text="More reviews"
                    {...ratingsOnCta}
                    className={styles.cta}
                    onClick={() => toggled = true}
                    data-hidden={toggled}
                />
                <Button
                    text="Less reviews"
                    {...ratingsOffCta}
                    className={styles.cta}
                    onClick={() => toggled = false}
                    data-hidden={!toggled}
                />
            {/if}
        {/if}
    </section>

    {#if myWork?.items?.length}
        <section>
            <h2 class={styles.title}>{myWork.title || 'My Work'}</h2>
            <div class="grid sm-2 md-3">
                {#each myWork.items as item}
                    <BlogCard {...item} />
                {/each}
            </div>
        </section>
    {/if}

    {#if services?.items?.length}
        <section>
            <h2 class={styles.title}>{servicesTitle || 'Services'}</h2>
            <GridWithIcons {...services} />
        </section>
    {/if}

    {#if servicesCta?.text}
        <Button {...servicesCta} className={styles.cta} />
    {/if}
</Layout>
