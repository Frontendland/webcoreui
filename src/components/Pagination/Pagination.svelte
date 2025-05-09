<script lang="ts">
    import type { SveltePaginationProps } from './pagination'

    import Button from '../Button/Button.svelte'

    import { classNames } from '../../utils/classNames'

    import ChevronLeft from '../../icons/chevron-left.svg?raw'
    import ChevronRight from '../../icons/chevron-right.svg?raw'

    import styles from './pagination.module.scss'

    const {
        type,
        showChevrons,
        showDots,
        disablePrevious,
        disableNext,
        previousLink,
        nextLink,
        previousPageLabel = 'Previous',
        nextPageLabel = 'Next',
        pages,
        theme = 'outline',
        totalPages,
        currentPage,
        onChange,
        className
    }: SveltePaginationProps = $props()

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

    let calculatedCurrentPage = $state(
        currentPage
            || (pages?.findIndex(page => page.active) || -1) + 1
            || 1
    )
</script>

<ul class={classes}>
    {#if type === 'dots' && generatedPages?.length}
        {#each generatedPages as _, index}
            <li>
                <button
                    aria-label={`page ${index + 1}`}
                    data-active={calculatedCurrentPage === index + 1 ? 'true' : null}
                    onclick={calculatedCurrentPage !== index + 1
                        ? () => paginate(index + 1)
                        : null}
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
                    {@html ChevronLeft}
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
                    {@html ChevronRight}
                {/if}
            </Button>
        </li>
    {/if}
</ul>
