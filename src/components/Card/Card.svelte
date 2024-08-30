<script lang="ts">
    import type { CardProps } from './card'

    import { classNames } from '../../utils/classNames'

    import styles from './card.module.scss'

    export let element: CardProps['element'] = 'section'
    export let title: CardProps['title'] = ''
    export let titleTag: CardProps['titleTag'] = 'span'
    export let compact: CardProps['compact'] = false
    export let className: CardProps['className'] = ''
    export let secondary: CardProps['secondary'] = false

    const classes = classNames([
        styles.card,
        secondary && styles.secondary,
        className
    ])

    const bodyClasses = classNames([
        styles.body,
        compact && styles.compact
    ])
</script>

<svelte:element this={element} class={classes} {...$$restProps}>
    {#if title}
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
    {/if}
    <div class={bodyClasses}>
        <slot />
    </div>
</svelte:element>
