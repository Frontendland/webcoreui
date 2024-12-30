<script lang="ts">
    import type { TableProps } from './table'

    import { classNames } from '../../utils/classNames'

    import styles from './table.module.scss'

    const {
        headings,
        footer,
        data,
        hover,
        striped,
        offsetStripe,
        compact,
        maxHeight,
        className
    }: TableProps = $props()

    const classes = classNames([
        styles.table,
        hover && styles.hover,
        striped && styles[`striped-${striped}s`],
        offsetStripe && styles.offset,
        compact && styles.compact,
        maxHeight && styles.scroll,
        className
    ])
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
            {#each data as row}
                <tr>
                    {#each row as column}
                        <td>{@html column}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
        {#if footer?.length}
            <tfoot>
                <tr>
                    {#each footer as data}
                        <td>{data}</td>
                    {/each}
                </tr>
            </tfoot>
        {/if}
    </table>
</div>
