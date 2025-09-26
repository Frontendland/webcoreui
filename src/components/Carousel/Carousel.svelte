<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteCarouselProps } from './carousel'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    import Pagination from '../Pagination/Pagination.svelte'
    import Progress from '../Progress/Progress.svelte'

    import { classNames } from '../../utils/classNames'
    import { debounce as debounceScroll } from '../../utils/debounce'
    import { getBreakpoint } from '../../utils/getBreakpoint'

    import styles from './carousel.module.scss'

    import type { PaginationEventType } from '../Pagination/pagination'

    let {
        items = 0,
        itemsPerSlide = 1,
        subText,
        scrollSnap = true,
        progress,
        pagination,
        effect,
        debounce = 20,
        className,
        wrapperClassName,
        paginationClassName,
        children,
        onScroll
    }: SvelteCarouselProps = $props()

    const getItemsPerSlide = () => {
        if (carousel) {
            return typeof itemsPerSlide === 'number'
                ? itemsPerSlide
                : itemsPerSlide[getBreakpoint()] || itemsPerSlide.default || 1
        }

        return typeof itemsPerSlide === 'number'
            ? itemsPerSlide
            : itemsPerSlide.default || 1
    }

    let carouselContainer: HTMLDivElement
    let carousel: HTMLUListElement
    let carouselItems: HTMLCollection | NodeListOf<HTMLLIElement>
    let progressValue = $state(0)
    let paginated = false
    let currentPage = $state(1)
    let totalPages = $state(Math.ceil(items / getItemsPerSlide()))
    let style = $state(getItemsPerSlide() > 1
        ? `--w-slide-width: calc(${100 / getItemsPerSlide()}% - 5px);`
        : null)

    const classes = classNames([
        styles.carousel,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        scrollSnap && styles.snap
    ])

    const wrapperClasses = classNames([
        styles.wrapper,
        effect && styles[effect],
        getItemsPerSlide() > 1 && styles['no-snap'],
        wrapperClassName
    ])

    const paginationWrapperClasses = classNames([
        styles['pagination-wrapper'],
        paginationClassName
    ])

    const paginationClasses = classNames([
        styles.pagination,
        !subText && paginationClassName
    ])

    const subTextValue = subText?.match(/\{0\}|\{1\}/g) ? subText : undefined

    const updateValues = () => {
        const activeElement = carouselItems[currentPage - 1] as HTMLLIElement

        Array.from(carouselItems).forEach(li => li.removeAttribute('data-active'))
        activeElement.dataset.active = 'true'

        if (subTextValue) {
            subText = subTextValue
                .replace('{0}', String(currentPage))
                .replace('{1}', String(totalPages))
        }

        if (progress) {
            const percentage = (100 / (totalPages - 1))

            progressValue = percentage * (currentPage - 1)
        }

        onScroll?.(currentPage)
    }

    const scroll = debounceScroll((event: Event) => {
        if (!paginated) {
            const target = event.target as HTMLDivElement
            const scrollLeft = target.scrollLeft
            const itemWidth = target.children[0].clientWidth
            const page = Math.round(scrollLeft / itemWidth) + 1

            currentPage = page

            updateValues()
        }
    }, debounce)

    const paginate = (event: PaginationEventType) => {
        const indexes = Array.from({ length: Math.ceil(items / getItemsPerSlide()) }, (_, i) => {
            return Array.from({ length: getItemsPerSlide() }, (_, j) => (i * getItemsPerSlide()) + j)
                .filter(index => index < items)
        })

        const pageIndex = event.direction === 'prev'
            ? indexes[event.page - 1][0]
            : indexes[event.page - 1][indexes[event.page - 1].length - 1]

        const liElement = carouselItems[pageIndex] as HTMLLIElement

        liElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

        currentPage = event.page
        paginated = true

        updateValues()
        setTimeout(() => {
            paginated = false
        }, 300)
    }

    const updateOnResize = () => {
        currentPage = 1
        progressValue = 0
        totalPages = Math.ceil(items / getItemsPerSlide())
        style = `--w-slide-width: calc(${100 / getItemsPerSlide()}% - 5px);`

        if (subTextValue) {
            subText = subTextValue
                .replace('{0}', '1')
                .replace('{1}', String(totalPages))
        }
    }

    onMount(() => {
        const usedInAstro = carousel.children[0].nodeName === 'ASTRO-SLOT'
        const observer = new ResizeObserver(updateOnResize)

        carouselItems = usedInAstro
            ? carousel.querySelectorAll('li')
            : carousel.children

        carouselContainer.addEventListener('scroll', scroll)

        if (typeof itemsPerSlide !== 'number') {
            observer.observe(carouselContainer)
        }

        return () => {
            carouselContainer.removeEventListener('scroll', scroll)
        }
    })
</script>

<section class={classes}>
    <div class={containerClasses} bind:this={carouselContainer}>
        <ul class={wrapperClasses} style={style} bind:this={carousel}>
            {@render children?.()}
        </ul>
    </div>
    <ConditionalWrapper
        condition={!!(subText || progress)}
        class={paginationWrapperClasses}
    >
        {#if progress}
            <Progress value={progressValue} />
        {/if}
        <Pagination
            type="arrows"
            {...pagination}
            currentPage={currentPage}
            totalPages={totalPages}
            className={paginationClasses}
            onChange={paginate}
        />
        {#if subText}
            <span class={styles.subtext}>
                {subText
                    .replace('{0}', '1')
                    .replace('{1}', String(totalPages))
                }
            </span>
        {/if}
    </ConditionalWrapper>
</section>
