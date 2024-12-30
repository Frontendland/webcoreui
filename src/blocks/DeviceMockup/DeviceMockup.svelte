<script lang="ts">
    import { classNames } from 'webcoreui'

    import type { SvelteDeviceMockupProps } from './deviceMockup'
    import styles from './device-mockup.module.scss'

    const {
        type,
        url,
        showButtons = true,
        closeButtonColor,
        maximizeButtonColor,
        minimizeButtonColor,
        className,
        children
    }: SvelteDeviceMockupProps = $props()

    const classes = classNames([
        styles.mockup,
        className
    ])

    const getColor = (color: string | undefined) => color
        ? `background:${color};`
        : null
</script>

<div class={classes}>
    {#if type === 'desktop' && (showButtons || url)}
        <div class={styles.actions}>
            {#if showButtons}
                <div class={styles.container}>
                    <span class={styles.button} style={getColor(closeButtonColor)}></span>
                    <span class={styles.button} style={getColor(maximizeButtonColor)}></span>
                    <span class={styles.button} style={getColor(minimizeButtonColor)}></span>
                </div>
            {/if}
            {#if url}
                <div class={classNames([
                    styles.url,
                    !showButtons && styles.full
                ])}>
                    {url}
                </div>
            {/if}
        </div>
    {/if}

    {@render children?.()}
</div>
