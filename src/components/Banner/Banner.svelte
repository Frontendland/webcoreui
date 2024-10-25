<script lang="ts">
    import type { BannerProps } from './banner'

    import Button from '../Button/Button.svelte'

    import { classNames } from '../../utils/classNames'

    import closeIcon from '../../icons/close.svg?raw'

    import styles from './banner.module.scss'

    export let top: BannerProps['top'] = 0
    export let bottom: BannerProps['bottom'] = false
    export let closeable: BannerProps['closeable'] = false
    export let padded: BannerProps['padded'] = false
    export let sticky: BannerProps['sticky'] = true
    export let className: BannerProps['className'] = ''

    let visible = true

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
</script>

{#if visible}
    <div class={classes} style={style}>
        <slot />
        {#if closeable}
            <Button
                theme="flat"
                className={styles.close}
                onClick={() => visible = false}
            >
                {@html closeIcon}
            </Button>
        {/if}
    </div>
{/if}
