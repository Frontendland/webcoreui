<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { CarouselItemProps } from './carouselItem'

    export type SvelteCarouselItemProps = {
        children: Snippet
    } & CarouselItemProps

    const {
        active,
        className,
        children
    }: SvelteCarouselItemProps = $props()
</script>

<li class={className} data-active={active}>
    {@render children?.()}
</li>
