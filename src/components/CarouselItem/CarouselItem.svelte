<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { CarouselItemProps } from './carouselItem'

    export type Props = CarouselItemProps & {
        children: Snippet
    }

    const {
        active,
        className,
        children
    }: Props = $props()
</script>

<li class={className} data-active={active}>
    {@render children?.()}
</li>
