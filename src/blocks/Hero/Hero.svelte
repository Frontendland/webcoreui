<script lang="ts">
    import { classNames } from 'webcoreui'
    import { ConditionalWrapper } from 'webcoreui/svelte'

    import AvatarWithRating from '@blocks/AvatarWithRating/AvatarWithRating.svelte'
    import Button from '@blocks/Button/Button.svelte'

    import type { HeroProps } from './hero'
    import styles from './hero.module.scss'

    const {
        badge,
        heading,
        subHeading,
        buttons,
        avatarWithRating,
        image,
        reverse,
        className
    }: HeroProps = $props()

    const classes = classNames([
        styles.hero,
        image?.src && 'flex column justify-between sm-row sm-items-center',
        reverse && 'sm-row-reverse',
        className
    ])
</script>

<section class={classes}>
    <ConditionalWrapper condition={!!image?.src} class={styles.wrapper}>
        {#if badge}
            <Button {...badge} badge={true} className={styles.badge} />
        {/if}
        <h1>{heading}</h1>
        {#if subHeading}
            <h2>{subHeading}</h2>
        {/if}

        {#if buttons?.length}
            <div class={classNames([styles.cta, 'flex xs wrap'])}>
                {#each buttons as button}
                    <Button {...button} />
                {/each}
            </div>
        {/if}

        {#if avatarWithRating}
            <AvatarWithRating
                {...avatarWithRating}
                className={styles.avatar}
            />
        {/if}
    </ConditionalWrapper>

    {#if image?.src}
        <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
        />
    {/if}
</section>
