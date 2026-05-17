<script lang="ts">
    import type { SvelteCarouselItemProps } from './carouselItem'

    const {
        active,
        className,
        children
    }: SvelteCarouselItemProps = $props()
</script>

<li class={className} data-active={active}>
    {@render children?.()}
</li>
