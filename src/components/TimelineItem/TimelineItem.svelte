<script lang="ts">
    import type { TimelineItemProps } from './timelineitem'
    import './timelineitem.scss'

    export let title: TimelineItemProps['title'] = ''
    export let titleTag: TimelineItemProps['titleTag'] = 'span'
    export let className: TimelineItemProps['className'] = ''

    const classes = [
        'w-timeline-item',
        className
    ].filter(Boolean).join(' ')
</script>

<li class={classes}>
    {#if title}
        <svelte:element this={titleTag} class="timeline-title">
            {title}
        </svelte:element>
    {/if}
    <slot />
</li>
