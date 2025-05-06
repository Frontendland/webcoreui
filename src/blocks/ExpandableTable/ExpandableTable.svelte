<script lang="ts">
    import { classNames } from 'webcoreui'

    import Button from '@blocks/Button/Button.svelte'

    import type { ExpandableTableProps } from './expandableTable'
    import styles from './expandable-table.module.scss'

    const {
        headings,
        data,
        hover,
        striped,
        offsetStripe,
        compact,
        maxHeight,
        className,
        numberOfVisibleRows = 5,
        expandButtonLabel = 'Expand',
        collapseButtonLabel = 'Collapse',
        expandButton
    }: ExpandableTableProps = $props()

    let expanded = $state(false)

    const classes = classNames([
        styles.table,
        hover && styles.hover,
        striped && styles[`striped-${striped}s`],
        offsetStripe && styles.offset,
        compact && styles.compact,
        maxHeight && styles.scroll,
        className
    ])

    const toggle = () => expanded = !expanded
</script>

<div class={classes} style={maxHeight ? `max-height:${maxHeight}` : null}>
    <table>
        {#if headings?.length}
            <thead>
                <tr>
                    {#each headings as heading}
                        <th>{heading}</th>
                    {/each}
                </tr>
            </thead>
        {/if}
        <tbody>
            {#each data as row, index}
                <tr data-hidden={numberOfVisibleRows < index + 1 && !expanded ? 'true' : undefined}>
                    {#each row as column}
                        <td>{@html column}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

{#if data.length > numberOfVisibleRows}
    <Button
        text={expanded ? collapseButtonLabel : expandButtonLabel}
        onClick={toggle}
        {...expandButton}
    />
{/if}
