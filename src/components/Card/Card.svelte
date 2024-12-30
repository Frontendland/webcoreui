<script lang="ts">
    import type { SvelteCardProps } from './card'

    import { classNames } from '../../utils/classNames'

    import styles from './card.module.scss'

    const {
        element = 'section',
        title,
        titleTag = 'span',
        compact,
        className,
        bodyClassName,
        secondary,
        children,
        ...rest
    }: SvelteCardProps = $props()

    const classes = classNames([
        styles.card,
        secondary && styles.secondary,
        className
    ])

    const bodyClasses = classNames([
        styles.body,
        compact && styles.compact,
        bodyClassName
    ])
</script>

<svelte:element this={element} class={classes} {...rest}>
    {#if title}
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
    {/if}
    <div class={bodyClasses}>
        {@render children?.()}
    </div>
</svelte:element>
