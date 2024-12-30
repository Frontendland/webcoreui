<script lang="ts">
    import { Card } from 'webcoreui/svelte'

    import type { SvelteSettingCardProps } from './settingCard'
    import styles from './setting-card.module.scss'

    const {
        title,
        subTitle,
        children
    }: SvelteSettingCardProps = $props()
</script>

<Card secondary={true} className={styles.card} bodyClassName={styles.body}>
    <div class={styles.titles}>
        <div>{title}</div>
        {#if subTitle}
            <div class="muted">{subTitle}</div>
        {/if}
    </div>
    {@render children?.()}
</Card>
