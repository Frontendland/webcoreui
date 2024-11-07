<script lang="ts">
    import type { HeroProps } from './hero'

    import styles from './hero.module.scss'

    import { classNames } from 'webcoreui'
    import {
        Badge,
        Button,
        ConditionalWrapper
    } from 'webcoreui/svelte'

    export let heading: HeroProps['heading'] = ''
    export let subHeading: HeroProps['subHeading'] = ''
    export let buttons: HeroProps['buttons'] = []
    export let badge: HeroProps['badge'] = null
    export let image: HeroProps['image'] = null
    export let reverse: HeroProps['reverse'] = false

    const classes = classNames([
        styles.hero,
        reverse && styles.reverse,
        image?.src && styles.flex
    ])
</script>

<section class={classes}>
    <ConditionalWrapper condition={!!image?.src}>
        {#if badge}
            <Badge {...badge} className={styles.badge}>
                {badge.text}
            </Badge>
        {/if}
        <h1>{heading}</h1>
        {#if subHeading}
            <h2>{subHeading}</h2>
        {/if}

        {#if buttons?.length}
            <div class={classNames([styles.cta, 'flex xs wrap'])}>
                {#each buttons as button}
                    <Button {...button} icon={null}>
                        {#if button.icon}
                            {@html button.icon}
                        {/if}
                        {button.text}
                    </Button>
                {/each}
            </div>
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
