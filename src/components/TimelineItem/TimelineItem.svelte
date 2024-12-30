<script lang="ts">
    import type { SvelteTimelineItemProps } from './timelineitem'

    import { classNames } from '../../utils/classNames'

    import styles from './timelineitem.module.scss'

    const {
        title,
        titleTag = 'span',
        className,
        children
    }: SvelteTimelineItemProps = $props()

    const classes = classNames([
        styles.item,
        className
    ])
</script>

<li class={classes}>
    {#if title}
        <svelte:element this={titleTag} class={styles.title}>
            {title}
        </svelte:element>
    {/if}
    {@render children?.()}
</li>
