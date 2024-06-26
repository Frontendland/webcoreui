<script lang="ts">
    import type { TableProps } from './table'
    import './table.scss'

    export let headings: TableProps['headings'] = []
    export let footer: TableProps['footer'] = []
    export let data: TableProps['data'] = []
    export let hover: TableProps['hover'] = false
    export let striped: TableProps['striped'] = null
    export let offsetStripe: TableProps['offsetStripe'] = false
    export let compact: TableProps['compact'] = false
    export let className: TableProps['className'] = ''

    const classes = [
        'w-table',
        hover && 'hover',
        striped && `striped-${striped}s`,
        offsetStripe && 'offset',
        compact && 'compact',
        className
    ].filter(Boolean).join(' ')
</script>

<div class={classes}>
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
