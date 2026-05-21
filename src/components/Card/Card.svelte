<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { CardProps } from './card'

    import { classNames } from '../../utils/classNames'

    import styles from './card.module.scss'

    export type Props = CardProps & {
        children: Snippet
    }

    const {
        element = 'section',
        title,
        titleTag = 'span',
        compact,
        className,
        bodyClassName,
        secondary,
        flat,
        children,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        styles.card,
        secondary && styles.secondary,
        (flat && (compact || secondary)) && styles.flat,
        className
    ]))

    const bodyClasses = $derived(classNames([
        styles.body,
        compact && styles.compact,
        bodyClassName
    ]))

    const titleClasses = $derived(classNames([
        styles.title,
        flat && styles.flat,
        (flat && compact) && styles.compact
    ]))
</script>

<svelte:element this={element} class={classes} {...rest}>
    {#if title}
        <svelte:element this={titleTag} class={titleClasses}>
            {@html title}
        </svelte:element>
    {/if}
    <div class={bodyClasses}>
        {@render children?.()}
    </div>
</svelte:element>
