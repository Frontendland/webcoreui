<script lang="ts">
    import { onMount } from 'svelte'
    import type { ImageLoaderProps } from './imageloader'

    import Image from '../Image/Image.svelte'
    import Skeleton from '../Skeleton/Skeleton.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './imageloader.module.scss'

    const {
        fallback,
        animate,
        type,
        width,
        height,
        color,
        waveColor,
        className,
        ...rest
    }: ImageLoaderProps = $props()

    let container: HTMLDivElement

    const styleVariables = classNames([
        `width: ${width}px;`,
        `height: ${height}px;`
    ])

    onMount(() => {
        const img = container.querySelector<HTMLImageElement>('img')
        const skeleton = container.querySelector<HTMLDivElement>('div')

        if (!img) {
            return
        }

        const handleError = () => {
            img.src = img.dataset.fallback || img.src
            skeleton?.remove()
        }

        if (img.complete) {
            img.naturalWidth === 0 ? handleError() : skeleton?.remove()

            return
        }

        img.addEventListener('load', () => skeleton?.remove(), { once: true })
        img.addEventListener('error', handleError, { once: true })
    })
</script>

<div class={styles.loader} style={styleVariables} bind:this={container}>
    <Skeleton
        animate={animate}
        type={type}
        width={Number(width)}
        height={Number(height)}
        color={color}
        waveColor={waveColor}
        className={className}
    />
    <Image
        width={width}
        height={height}
        className={className}
        data-fallback={fallback}
        {...rest}
    />
</div>
