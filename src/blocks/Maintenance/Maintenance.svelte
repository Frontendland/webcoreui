<script lang="ts">
    import { classNames } from 'webcoreui'

    import type { MaintenanceProps } from './maintenance'
    import cog from './cog.svg?raw'
    import styles from './maintenance.module.scss'

    const {
        img,
        animated = true,
        title = 'Under Maintenance',
        subTitle = 'We are performing scheduled maintenance.',
        className
    }: MaintenanceProps = $props()

    const classes = classNames([
        styles.maintenance,
        animated && styles.animated,
        className
    ])
</script>

<section class={classes}>
    {#if img?.url}
        <img
            src={img.url}
            alt={img.alt || title}
            width={img.width}
            height={img.height}
        />
    {:else}
        {@html cog}
    {/if}

    <h1 class={styles.title}>{title}</h1>

    {#if subTitle}
        <span class="muted">
            {@html subTitle}
        </span>
    {/if}
</section>
