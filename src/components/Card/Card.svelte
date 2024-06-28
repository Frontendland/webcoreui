<script lang="ts">
    import type { CardProps } from './card'
    import styles from './card.module.scss'

    export let element: CardProps['element'] = 'section'
    export let title: CardProps['title'] = ''
    export let titleTag: CardProps['titleTag'] = 'span'
    export let compact: CardProps['compact'] = false
    export let className: CardProps['className'] = ''
    export let secondary: CardProps['secondary'] = false

    const classes = [
        styles.card,
        secondary && styles.secondary,
        className
    ].filter(Boolean).join(' ')

    const bodyClasses = [
        styles.body,
        compact && styles.compact
    ].filter(Boolean).join(' ')
</script>

<svelte:element this={element} class={classes} {...$$restProps}>
    {#if title}
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
    {/if}
    <div class={bodyClasses}>
        {#if compact && !secondary}
            <div class={styles.wrapper}><slot /></div>
        {:else}
            <slot />
        {/if}
    </div>
</svelte:element>
