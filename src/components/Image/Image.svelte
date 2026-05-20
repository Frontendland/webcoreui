<script lang="ts">
    import type { HTMLImgAttributes } from 'svelte/elements'
    import type { ImageProps } from './image'

    import AspectRatio from '../AspectRatio/AspectRatio.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './image.module.scss'

    export type SvelteImageProps = ImageProps<HTMLImgAttributes>

    const {
        src,
        alt,
        width,
        height,
        lazy,
        ratio,
        center,
        full,
        rounded,
        className,
        ...rest
    }: SvelteImageProps = $props()

    const classes = $derived(classNames([
        styles.img,
        center && styles.center,
        full && styles[full],
        rounded && styles[rounded],
        className
    ]))
</script>

{#snippet img()}
    <img
        {...rest}
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : null}
        class={classes}
    />
{/snippet}

{#if ratio}
    <AspectRatio ratio={ratio}>
        {@render img()}
    </AspectRatio>
{:else}
    {@render img()}
{/if}
