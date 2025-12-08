import React, { useState } from 'react'
import type { HeadingObject, ReactDataTableProps } from './datatable'

import Button from '../Button/Button.tsx'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'
import Input from '../Input/Input.tsx'
import Pagination from '../Pagination/Pagination.tsx'
import Select from '../Select/Select.tsx'

import { classNames } from '../../utils/classNames'
import { debounce } from '../../utils/debounce'

import checkIcon from '../../icons/check.svg?raw'
import orderIcon from '../../icons/order.svg?raw'
import searchIcon from '../../icons/search.svg?raw'

import styles from './datatable.module.scss'

import type { ListEventType } from '../List/list'

const DataTable = ({
    headings,
    filterPlaceholder = 'Filter entries',
    showFilterIcon,
    noResultsLabel = 'No results.',
    itemsPerPage,
    subText,
    columnToggleLabel = 'Columns',
    pagination,
    data,
    hover,
    striped,
    offsetStripe,
    compact,
    maxHeight,
    className,
    id,
    onFilter,
    children
// eslint-disable-next-line complexity
}: ReactDataTableProps) => {
    const [filteredData, setFilteredData] = useState<any>(data)
    const [toggledData, setToggledData] = useState(filteredData)
    const [filteredHeadings, setFilteredHeadings] = useState<any>(headings)
    const [page, setPage] = useState(1)
    const [hasActiveFilter, setHasActiveFilter] = useState(false)
    const [sortOrder, setSortOrder] = useState(1)

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

    const styleVariables = {
        ...(maxHeight && { maxHeight })
    } as React.CSSProperties

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

        setHasActiveFilter(!!target.value)

        setFilteredData(toggledData?.filter((row: string[]) => {
            const rowValue = row.filter((_, index) => columnFilterIndexes.includes(index))
                .join('')
                .toLowerCase()

            return rowValue.includes(target.value.toLowerCase())
        }))

        onFilter?.({
            results: filteredData,
            numberOfResults: filteredData.length
        })
    }, 400)

    const toggleColumns = (event: ListEventType) => {
        const columnToggleListElement = Array.from(event.list.children)
            .find(child => (child as HTMLLIElement).dataset.name === event.name) as HTMLLIElement
        const svgIcon = columnToggleListElement.children[0] as HTMLElement
        let mappedData

        svgIcon.style.opacity = svgIcon.style.opacity === '0'
            ? '1'
            : '0'

        if (svgIcon.style.opacity === '0') {
            mappedData = (hasActiveFilter ? data : filteredData)?.map((row: string[]) => {
                return row.map((column, index) => index === Number(event.value) ? null : column)
            })

            setFilteredData(mappedData)

            setFilteredHeadings(filteredHeadings.map((heading: HeadingObject | string) => {
                return ((heading as HeadingObject)?.name || heading) === event.name ? null : heading
            }))
        } else {
            mappedData = (hasActiveFilter ? data : filteredData)?.map((row: string[], x: number) => {
                return row.map((column, y) => y === Number(event.value) ? data?.[x][y] : column)
            })

            setFilteredData(mappedData)

            setFilteredHeadings(filteredHeadings.map((heading: HeadingObject | string, index: number) => {
                return ((headings?.[index] as HeadingObject)?.name || headings?.[index]) === event.name
                    ? headings?.[index]
                    : heading
            }))
        }

        setToggledData(mappedData)
    }

    const sort = (index: number) => {
        const sortedData = filteredData.sort((a: string[], b: string[]) => {
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

        setFilteredData(sortedData)
        setSortOrder(sortOrder === 1 ? -1 : 1)
    }

    const isNextPage = (index: number) => {
        if (hasPagination && itemsPerPage && !hasActiveFilter) {
            const currentPage = Math.ceil((index + 1) / itemsPerPage)

            return currentPage !== page ? 'true' : undefined
        }

        if (hasActiveFilter && itemsPerPage) {
            return index >= itemsPerPage ? 'true' : undefined
        }

        return undefined
    }

    return (
        <section className={className} id={id}>
            {(!!columnFilterIndexes?.length || showColumnToggle) && (
                <div className={styles.filters}>
                    {!!columnFilterIndexes?.length && (
                        <Input
                            type="search"
                            placeholder={filterPlaceholder}
                            onInput={filter}
                        >
                            {showFilterIcon && (
                                <span dangerouslySetInnerHTML={{ __html: searchIcon }} />
                            )}
                        </Input>
                    )}
                    {showColumnToggle && (
                        <Select
                            name={`data-table-${id || crypto.randomUUID()}`}
                            itemGroups={columnToggleItems}
                            position="bottom-end"
                            value={columnToggleLabel}
                            onChange={toggleColumns}
                            updateValue={false}
                        />
                    )}
                </div>
            )}

            <div className={classes} style={styleVariables}>
                <table>
                    {!!filteredHeadings?.length && (
                        <thead>
                            <tr>
                                {filteredHeadings?.map((heading: HeadingObject | string, index: number) => {
                                    if (!heading) {
                                        return null
                                    }

                                    return (
                                        <th key={index}>
                                            <ConditionalWrapper
                                                condition={!!(heading as HeadingObject).sortable}
                                                wrapper={children => (
                                                    <Button theme="flat" slot="wrapper" onClick={() => sort(index)}>
                                                        {children}
                                                        <span dangerouslySetInnerHTML={{ __html: orderIcon }} />
                                                    </Button>
                                                )}
                                            >
                                                {(heading as HeadingObject).name || heading as string}
                                            </ConditionalWrapper>
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                    )}

                    <tbody>
                        {filteredData?.map((row: string[], rowIndex: number) => (
                            <tr key={rowIndex} data-hidden={isNextPage(rowIndex)}>
                                {row.filter(Boolean).map((column, columnIndex) => (
                                    <td
                                        key={columnIndex}
                                        dangerouslySetInnerHTML={{ __html: column }}
                                    />
                                ))}
                            </tr>
                        ))}
                        {children}
                    </tbody>
                    {!filteredData?.length && (
                        <tfoot>
                            <tr>
                                <td
                                    colSpan={data?.[0].length}
                                    className={styles['no-results']}
                                >
                                    {noResultsLabel}
                                </td>
                            </tr>
                        </tfoot>
                    )}
                </table>
            </div>
            {(subText || hasPagination) && (
                <div className={footerClasses}>
                    {subText && (
                        <span className={styles.subtext}>{subText}</span>
                    )}
                    {(hasPagination && itemsPerPage && !hasActiveFilter) && (
                        <Pagination
                            {...pagination}
                            totalPages={Math.ceil((data?.length || 0) / itemsPerPage)}
                            currentPage={page}
                            onChange={event => setPage(event.page)}
                        />
                    )}
                </div>
            )}
        </section>
    )
}

export default DataTable
