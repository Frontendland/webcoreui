<script lang="ts">
    import type { CardProps } from './card'
    import './card.scss'

    export let element: CardProps['element'] = 'section'
    export let title: CardProps['title'] = ''
    export let titleTag: CardProps['titleTag'] = 'span'
    export let compact: CardProps['compact'] = false
    export let className: CardProps['className'] = ''
    export let secondary: CardProps['secondary'] = false

    const classes = [
        'w-card',
        className,
        secondary && 'secondary'
    ].filter(Boolean).join(' ')
</script>

<svelte:element this={element} class={classes} {...$$restProps}>
    {#if title}
        <svelte:element this={titleTag} class="card-title">
            {title}
        </svelte:element>
    {/if}
    <div class="card-body" class:compact>
        {#if compact && !secondary}
            <div class="card-wrapper"><slot /></div>
        {:else}
            <slot />
        {/if}
    </div>
</svelte:element>
