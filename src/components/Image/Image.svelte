<script lang="ts">
    import type { ImageProps } from './image'

    import AspectRatio from '../AspectRatio/AspectRatio.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './image.module.scss'

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
    }: ImageProps = $props()

    const classes = classNames([
        styles.img,
        center && styles.center,
        full && styles[full],
        rounded && styles[rounded],
        className
    ])
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
