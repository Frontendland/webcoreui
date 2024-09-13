<script lang="ts">
    import type { HeadingObject, SvelteDataTableProps } from './datatable'

    import Button from '../Button/Button.svelte'
    import Input from '../Input/Input.svelte'
    import Pagination from '../Pagination/Pagination.svelte'
    import Select from '../Select/Select.svelte'

    import { classNames } from '../../utils/classNames'
    import { debounce } from '../../utils/debounce'

    import checkIcon from '../../icons/check.svg?raw'
    import orderIcon from '../../icons/order.svg?raw'
    import searchIcon from '../../icons/search.svg?raw'

    import styles from './datatable.module.scss'

    import type { ListEventType } from '../List/list'

    export let headings: SvelteDataTableProps['headings'] = []
    export let filterPlaceholder: SvelteDataTableProps['filterPlaceholder'] = 'Filter entries'
    export let showFilterIcon: SvelteDataTableProps['showFilterIcon'] = false
    export let noResultsLabel: SvelteDataTableProps['noResultsLabel'] = 'No results.'
    export let itemsPerPage: SvelteDataTableProps['itemsPerPage'] = null
    export let subText: SvelteDataTableProps['subText'] = ''
    export let columnToggleLabel: SvelteDataTableProps['columnToggleLabel'] = 'Columns'
    export let pagination: SvelteDataTableProps['pagination'] = {}
    export let data: SvelteDataTableProps['data'] = []
    export let hover: SvelteDataTableProps['hover'] = false
    export let striped: SvelteDataTableProps['striped'] = null
    export let offsetStripe: SvelteDataTableProps['offsetStripe'] = false
    export let compact: SvelteDataTableProps['compact'] = false
    export let maxHeight: SvelteDataTableProps['maxHeight'] = ''
    export let className: SvelteDataTableProps['className'] = ''
    export let onFilter: SvelteDataTableProps['onFilter'] = () => {}

    let filteredData: any = data
    let toggledData: any = filteredData
    let filteredHeadings: any = headings
    let page: number = 1
    let hasActiveFilter: boolean = false
    let sortOrder = 1

    const classes = classNames([
        styles.table,
        hover && styles.hover,
        striped && styles[`striped-${striped}s`],
        offsetStripe && styles.offset,
        compact && styles.compact,
        maxHeight && styles.scroll
    ])

    const footerClasses = classNames([
        styles.footer,
        subText && styles.between
    ])

    const showColumnToggle = headings?.some(heading => {
        return typeof heading === 'string' ? false : heading.toggleable
    })

    const columnToggleItems = [{
        items: headings?.length ? headings
            .filter(heading => typeof heading !== 'string' && heading.toggleable)
            .map(heading => ({
                icon: checkIcon,
                name: (heading as HeadingObject).name,
                value: String(headings.findIndex(h => {
                    return (h as HeadingObject).name === (heading as HeadingObject).name
                }))
            })) : []
    }]

    const columnFilterIndexes = headings?.map(heading => (heading as HeadingObject).filterable)
        .map((heading, index) => heading ? index : null)
        .filter(heading => heading !== null) || []

    const hasPagination = data?.length && itemsPerPage
        ? data.length > itemsPerPage
        : false

    const filter = debounce((event: Event) => {
        const target = event.target as HTMLInputElement

        hasActiveFilter = !!target.value

        filteredData = toggledData?.filter((row: string[]) => {
            const rowValue = row.filter((_, index) => columnFilterIndexes.includes(index))
                .join('')
                .toLowerCase()

            return rowValue.includes(target.value.toLowerCase())
        })

        onFilter?.({
            results: filteredData,
            numberOfResults: filteredData.length
        })
    }, 400)

    const toggleColumns = (event: ListEventType) => {
        const columnToggleListElement = Array.from(event.list.children)
            .find(child => (child as HTMLLIElement).dataset.name === event.name) as HTMLLIElement
        const svgIcon = columnToggleListElement.children[0] as HTMLElement

        svgIcon.style.opacity = svgIcon.style.opacity === '0'
            ? '1'
            : '0'

        if (svgIcon.style.opacity === '0') {
            filteredData = filteredData?.map((row: string[]) => {
                return row.map((column, index) => index === Number(event.value) ? null : column)
            })

            filteredHeadings = filteredHeadings.map((heading: HeadingObject | string) => {
                return ((heading as HeadingObject)?.name || heading) === event.name ? null : heading
            })
        } else {
            filteredData = filteredData?.map((row: string[], x: number) => {
                return row.map((column, y) => y === Number(event.value) ? data?.[x][y] : column)
            })

            filteredHeadings = filteredHeadings.map((heading: HeadingObject | string, index: number) => {
                return ((headings?.[index] as HeadingObject)?.name || headings?.[index]) === event.name
                    ? headings?.[index]
                    : heading
            })
        }

        toggledData = filteredData
    }

    const sort = (index: number) => {
        filteredData = filteredData.sort((a: string[], b: string[]) => {
            let aValue: string | number = a[index]
            let bValue: string | number = b[index]

            if (!isNaN(aValue as any)) {
                aValue = Number(aValue)
            }

            if (!isNaN(bValue as any)) {
                bValue = Number(bValue)
            }

            return aValue > bValue
                ? sortOrder * -1
                : sortOrder
        })

        sortOrder = sortOrder === 1 ? -1 : 1
    }

    $: isNextPage = (index: number) => {
        if (hasPagination && itemsPerPage && !hasActiveFilter) {
            const currentPage = Math.ceil((index + 1) / itemsPerPage)

            return currentPage !== page ? 'true' : undefined
        }

        if (hasActiveFilter && itemsPerPage) {
            return index >= itemsPerPage ? 'true' : undefined
        }

        return undefined
    }
</script>

<section class={className}>
    {#if columnFilterIndexes?.length || showColumnToggle}
        <div class={styles.filters}>
            {#if columnFilterIndexes?.length}
                {#if showFilterIcon}
                    <Input
                        type="search"
                        placeholder={filterPlaceholder}
                        onInput={filter}
                    >
                        {@html searchIcon}
                    </Input>
                {:else}
                    <Input
                        type="search"
                        placeholder={filterPlaceholder}
                        onInput={filter}
                    />
                {/if}
            {/if}
            {#if showColumnToggle}
                <Select
                    name={`data-table-${crypto.randomUUID()}`}
                    itemGroups={columnToggleItems}
                    position="bottom-end"
                    value={columnToggleLabel}
                    onChange={toggleColumns}
                    updateValue={false}
                />
            {/if}
        </div>
    {/if}

    <div
        class={classes}
        style={maxHeight ? `max-height:${maxHeight}` : undefined}
    >
        <table>
            {#if filteredHeadings?.length}
                <thead>
                    <tr>
                        {#each filteredHeadings as heading, index}
                            {#if heading}
                                <th>
                                    {#if heading.sortable}
                                        <Button theme="flat" slot="wrapper" onClick={() => sort(index)}>
                                            {heading.name || heading}
                                            {@html orderIcon}
                                        </Button>
                                    {:else}
                                        {heading.name || heading}
                                    {/if}
                                </th>
                            {/if}
                        {/each}
                    </tr>
                </thead>
            {/if}

            <tbody>
                {#if filteredData?.length}
                    {#each filteredData as row, index}
                        <tr data-hidden={isNextPage(index)}>
                            {#each row as column}
                                {#if column}
                                    <td>
                                        {@html column}
                                    </td>
                                {/if}
                            {/each}
                        </tr>
                    {/each}
                {/if}
                <slot />
            </tbody>
            {#if columnFilterIndexes?.length && !filteredData.length}
                <tfoot>
                    <tr>
                        <td colspan={data?.[0].length} class={styles['no-results']}>
                            {noResultsLabel}
                        </td>
                    </tr>
                </tfoot>
            {/if}
        </table>
    </div>
    {#if subText || hasPagination}
        <div class={footerClasses}>
            {#if subText}
                <span class={styles.subtext}>{subText}</span>
            {/if}
            {#if hasPagination && itemsPerPage && !hasActiveFilter}
                <Pagination
                    {...pagination}
                    totalPages={Math.ceil((data?.length || 0) / itemsPerPage)}
                    onChange={event => page = event.page}
                />
            {/if}
        </div>
    {/if}
</section>
