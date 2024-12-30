<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Button, Card } from 'webcoreui/svelte'

    import type { TilesProps } from './tiles'
    import styles from './tiles.module.scss'

    const {
        columns,
        items
    }: TilesProps = $props()
</script>

<div class={classNames([
    'grid sm',
    columns && `xs-${columns}`,
    (items.length > 1 && items.length !== 3 && !columns) && 'xs-2',
    (items.length === 3 && !columns) && 'xs-3'
])}>
    {#each items as item}
        <Button theme="flat" className={styles.btn} href={item.href} target={item.target}>
            <Card secondary={true} className={styles.card}>
                {#if item.icon}
                    {@html item.icon}
                {/if}
                {item.label}
            </Card>
        </Button>
    {/each}
</div>
