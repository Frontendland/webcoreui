<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Button, Card, ConditionalWrapper } from 'webcoreui/svelte'

    import ButtonBlock from '@blocks/Button/Button.svelte'

    import type { TilesProps } from './tiles'
    import styles from './tiles.module.scss'

    const {
        columns,
        items
    }: TilesProps = $props()
</script>

{#snippet tile(item: TilesProps['items'][number])}
    <Card secondary={true} className={styles.card}>
        {#if item.icon}
            {@html item.icon}
        {/if}

        <ConditionalWrapper
            condition={!!item.subText}
            class={classNames([styles.wrapper, 'flex column none'])}
        >
            <ConditionalWrapper condition={!!item.badge?.text} class="flex justify-between">
                {item.label}

                {#if item.badge}
                    <ButtonBlock badge={true} {...item.badge} />
                {/if}
            </ConditionalWrapper>

            {#if item.subText}
                <span class="muted">{item.subText}</span>
            {/if}
        </ConditionalWrapper>
    </Card>
{/snippet}

<div class={classNames([
    'grid sm',
    columns && `xs-${columns}`,
    (items?.length > 1 && items?.length !== 3 && !columns) && 'xs-2',
    (items?.length === 3 && !columns) && 'xs-3'
])}>
    {#each items as item}
        {#if item.href}
            <Button theme="flat" className={styles.btn} href={item.href} target={item.target}>
                {@render tile(item)}
            </Button>
        {:else}
            {@render tile(item)}
        {/if}
    {/each}
</div>
