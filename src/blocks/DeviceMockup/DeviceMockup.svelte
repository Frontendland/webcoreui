<script lang="ts">
    import { classNames } from 'webcoreui'

    import type { DeviceMockupProps } from './deviceMockup'
    import styles from './device-mockup.module.scss'

    export let type: DeviceMockupProps['type'] = null
    export let url: DeviceMockupProps['url'] = ''
    export let showButtons: DeviceMockupProps['showButtons'] = true
    export let closeButtonColor: DeviceMockupProps['closeButtonColor'] = ''
    export let maximizeButtonColor: DeviceMockupProps['maximizeButtonColor'] = ''
    export let minimizeButtonColor: DeviceMockupProps['minimizeButtonColor'] = ''
    export let className: DeviceMockupProps['className'] = ''

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
                    <span class={styles.button} style={getColor(closeButtonColor)} />
                    <span class={styles.button} style={getColor(maximizeButtonColor)} />
                    <span class={styles.button} style={getColor(minimizeButtonColor)} />
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

    <slot />
</div>
