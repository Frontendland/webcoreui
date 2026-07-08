<script lang="ts">
    import type { Snippet } from 'svelte'
    import { classNames } from 'webcoreui'
    import { Card, ConditionalWrapper } from 'webcoreui/svelte'

    import type { SettingCardProps } from './settingCard'
    import styles from './setting-card.module.scss'

    export type Props = SettingCardProps & {
        children: Snippet
        additionalContent?: Snippet
    }

    const {
        icon,
        title,
        subTitle,
        children,
        additionalContent,
        ...rest
    }: Props = $props()
</script>

<Card
    secondary={true}
    flat={true}
    bodyClassName="flex column sm"
    {...rest}
>
    <div class={classNames([
        styles.body,
        'flex justify-between items-center xs'
    ])}>
        <ConditionalWrapper condition={!!icon} class="flex center">
            {#if icon}
                {@html icon}
            {/if}

            <div class="flex column xxs">
                <div>{title}</div>
                {#if subTitle}
                    <div class="muted">{subTitle}</div>
                {/if}
            </div>
        </ConditionalWrapper>

        {@render children?.()}
    </div>
    {@render additionalContent?.()}
</Card>
