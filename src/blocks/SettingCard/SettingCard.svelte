<script lang="ts">
    import type { SettingCardProps } from './settingCard'

    import styles from './setting-card.module.scss'

    import { Card } from 'webcoreui/svelte'

    export let title: SettingCardProps['title'] = ''
    export let subTitle: SettingCardProps['subTitle'] = ''
</script>

<Card secondary={true} className={styles.card} bodyClassName={styles.body}>
    <div class={styles.titles}>
        <div>{title}</div>
        {#if subTitle}
            <div class="muted">{subTitle}</div>
        {/if}
    </div>
    <slot />
</Card>
