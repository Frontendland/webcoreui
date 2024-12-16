<script lang="ts">
    import type { SveltePaginationProps } from './pagination'

    import Button from '../Button/Button.svelte'

    import { classNames } from '../../utils/classNames'

    import ArrowLeft from '../../icons/arrow-left.svg?raw'
    import ArrowRight from '../../icons/arrow-right.svg?raw'

    import styles from './pagination.module.scss'

    export let type: SveltePaginationProps['type'] = null
    export let showChevrons: SveltePaginationProps['showChevrons'] = false
    export let showDots: SveltePaginationProps['showDots'] = false
    export let disablePrevious: SveltePaginationProps['disablePrevious'] = false
    export let disableNext: SveltePaginationProps['disableNext'] = false
    export let previousLink: SveltePaginationProps['previousLink'] = ''
    export let nextLink: SveltePaginationProps['nextLink'] = ''
    export let previousPageLabel: SveltePaginationProps['previousPageLabel'] = 'Previous'
    export let nextPageLabel: SveltePaginationProps['nextPageLabel'] = 'Next'
    export let pages: SveltePaginationProps['pages'] = []
    export let theme: SveltePaginationProps['theme'] = 'outline'
    export let totalPages: SveltePaginationProps['totalPages'] = null
    export let currentPage: SveltePaginationProps['currentPage'] = null
    export let className: SveltePaginationProps['className'] = ''
    export let onChange: SveltePaginationProps['onChange'] = () => {}

    const classes = classNames([
        styles.pagination,
        theme !== 'outline' && (theme === null || theme === undefined ? styles.primary : styles[theme]),
        type === 'dots' && styles.dots,
        className
    ])

    const calculatedTotalPages = totalPages
        || pages?.length
        || 0

    const generatedPages = pages?.length
        ? pages
        : Array(totalPages || 0).fill(0).map((_, index) => ({
            ...(index === 0 && { active: true }),
            label: index + 1
        }))

    const paginate = (to: string | number) => {
        const previousPage = calculatedCurrentPage

        if (to === 'prev') {
            calculatedCurrentPage = calculatedCurrentPage - 1
        } else if (to === 'next') {
            calculatedCurrentPage = calculatedCurrentPage + 1
        } else {
            calculatedCurrentPage = to as number
        }

        const label = pages?.[calculatedCurrentPage - 1]?.label

        onChange?.({
            page: calculatedCurrentPage,
            direction: previousPage > calculatedCurrentPage ? 'prev' : 'next',
            ...(label && { label })
        })
    }

    $: calculatedCurrentPage = currentPage
        || (pages?.findIndex(page => page.active) || -1) + 1
        || 1
</script>

<ul class={classes}>
    {#if type === 'dots' && generatedPages?.length}
        {#each generatedPages as _, index}
            <li>
                <button
                    aria-label={`page ${index + 1}`}
                    data-active={calculatedCurrentPage === index + 1 ? 'true' : null}
                    on:click={calculatedCurrentPage !== index + 1
                        ? () => paginate(index + 1)
                        : null
                    }
                ></button>
            </li>
        {/each}
    {:else}
        <li>
            <Button
                disabled={(disablePrevious || (calculatedCurrentPage === 1 && !previousLink)) ? true : null}
                href={!disablePrevious ? previousLink : undefined}
                theme={theme}
                onClick={!(disablePrevious || (calculatedCurrentPage === 1 && !previousLink))
                    ? () => paginate('prev')
                    : undefined
                }
            >
                {#if showChevrons || type === 'arrows'}
                    {@html ArrowLeft}
                {/if}
                {#if type !== 'arrows'}
                    {previousPageLabel}
                {/if}
            </Button>
        </li>
        {#if type !== 'arrows' && pages?.length}
            {#each pages?.slice(0, calculatedTotalPages) as page, index}
                <li>
                    <Button
                        href={page.link}
                        data-active={calculatedCurrentPage === index + 1 ? 'true' : null}
                        theme={theme}
                        onClick={calculatedCurrentPage !== index + 1
                            ? () => paginate(index + 1)
                            : undefined
                        }
                    >
                        {page.label}
                    </Button>
                </li>
            {/each}
        {/if}
        {#if showDots}
            <li>
                <Button theme={theme} className={styles.inactive}>
                    ...
                </Button>
            </li>
        {/if}
        <li>
            <Button
                disabled={(disableNext || calculatedCurrentPage === calculatedTotalPages) ? true : null}
                href={!disableNext ? nextLink : undefined}
                theme={theme}
                onClick={!disableNext
                    ? () => paginate('next')
                    : undefined
                }
            >
                {#if type !== 'arrows'}
                    {nextPageLabel}
                {/if}
                {#if showChevrons || type === 'arrows'}
                    {@html ArrowRight}
                {/if}
            </Button>
        </li>
    {/if}
</ul>
