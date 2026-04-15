<script lang="ts">
    import { Card } from 'webcoreui/svelte'

    import type { SvelteSettingCardProps } from './settingCard'
    import styles from './setting-card.module.scss'

    const {
        title,
        subTitle,
        children,
        additionalContent,
        ...rest
    }: SvelteSettingCardProps = $props()
</script>

<Card
    secondary={true}
    className={styles.card}
    bodyClassName="flex column sm"
    {...rest}
>
    <div class="flex justify-between items-center xs">
        <div class="flex column xxs">
            <div>{title}</div>
            {#if subTitle}
                <div class="muted">{subTitle}</div>
            {/if}
        </div>
        {@render children?.()}
    </div>
    {@render additionalContent?.()}
</Card>
