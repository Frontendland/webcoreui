<script lang="ts">
    import type { SvelteBannerProps } from './banner'

    import Button from '../Button/Button.svelte'

    import { classNames } from '../../utils/classNames'

    import closeIcon from '../../icons/close.svg?raw'

    import styles from './banner.module.scss'

    const {
        top,
        bottom,
        closeable,
        padded,
        sticky = true,
        className,
        children
    }: SvelteBannerProps = $props()

    const classes = classNames([
        styles.banner,
        bottom && styles.bottom,
        padded && styles.padded,
        !sticky && styles.relative,
        className
    ])

    const style = top
        ? `--w-banner-top: ${top}px;`
        : null

    let visible = $state(true)
</script>

{#if visible}
    <div class={classes} style={style}>
        {@render children?.()}
        {#if closeable}
            <Button
                theme="flat"
                className={styles.close}
                onClick={() => visible = false}
                aria-label="close"
            >
                {@html closeIcon}
            </Button>
        {/if}
    </div>
{/if}
