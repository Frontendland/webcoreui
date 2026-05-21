<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { TimelineItemProps } from './timelineitem'

    import { classNames } from '../../utils/classNames'

    import styles from './timelineitem.module.scss'

    export type Props = TimelineItemProps & {
        children: Snippet
    }

    const {
        title,
        titleTag = 'span',
        icon,
        className,
        children
    }: Props = $props()

    const classes = $derived(classNames([
        styles.item,
        icon && styles['with-icon'],
        className
    ]))
</script>

<li class={classes}>
    {#if icon}
        <span class={styles.icon}>
            {@html icon}
        </span>
    {/if}
    {#if title}
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
    {/if}
    {@render children?.()}
</li>
