<script lang="ts">
    import type { TimelineItemProps } from './timelineitem'

    import { classNames } from '../../utils/classNames'

    import styles from './timelineitem.module.scss'

    export let title: TimelineItemProps['title'] = ''
    export let titleTag: TimelineItemProps['titleTag'] = 'span'
    export let className: TimelineItemProps['className'] = ''

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
    <slot />
</li>
