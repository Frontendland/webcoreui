<script lang="ts">
    import { onMount } from 'svelte'
    import type { SvelteCarouselProps } from './carousel'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    import Pagination from '../Pagination/Pagination.svelte'
    import Progress from '../Progress/Progress.svelte'

    import { classNames } from '../../utils/classNames'
    import { debounce } from '../../utils/debounce'

    import styles from './carousel.module.scss'

    import type { PaginationEventType } from '../Pagination/pagination'

    export let items: SvelteCarouselProps['items'] = 0
    export let visibleItems: SvelteCarouselProps['visibleItems'] = 1
    export let subText: SvelteCarouselProps['subText'] = ''
    export let scrollSnap: SvelteCarouselProps['scrollSnap'] = true
    export let progress: SvelteCarouselProps['progress'] = false
    export let pagination: SvelteCarouselProps['pagination'] = {}
    export let effect: SvelteCarouselProps['effect'] = null
    export let className: SvelteCarouselProps['className'] = ''
    export let wrapperClassName: SvelteCarouselProps['wrapperClassName'] = ''
    export let paginationClassName: SvelteCarouselProps['paginationClassName'] = ''

    let carouselContainer: HTMLDivElement
    let carousel: HTMLUListElement
    let carouselItems: HTMLCollection | NodeListOf<HTMLLIElement>
    let progressValue = 0
    let paginated = false
    let currentPage = 1

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

    const totalPages = Math.ceil(items / visibleItems!)
    const subTextValue = subText?.match(/\{0\}|\{1\}/g) ? subText : undefined
    const style = visibleItems! > 1
        ? `--w-slide-width: ${100 / visibleItems!}%;`
        : null

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
    }

    const scroll = debounce((event: Event) => {
        if (paginated) {
            paginated = false
        } else {
            const target = event.target as HTMLDivElement
            const scrollLeft = target.scrollLeft
            const itemWidth = target.children[0].clientWidth
            const page = Math.round(scrollLeft / itemWidth) + 1

            currentPage = page

            updateValues()
        }
    }, 20)

    const paginate = (event: PaginationEventType) => {
        const liElement = carouselItems[event.page - 1] as HTMLLIElement

        liElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

        currentPage = event.page
        paginated = true

        updateValues()
    }

    onMount(() => {
        const usedInAstro = carousel.children[0].nodeName === 'ASTRO-SLOT'

        carouselContainer.addEventListener('scroll', scroll)

        carouselItems = usedInAstro
            ? carousel.querySelectorAll('li')
            : carousel.children

        return () => {
            carouselContainer.removeEventListener('scroll', scroll)
        }
    })
</script>

<section class={classes}>
    <div class={containerClasses} bind:this={carouselContainer}>
        <ul class={wrapperClasses} style={style} bind:this={carousel}>
            <slot />
        </ul>
    </div>
    <ConditionalWrapper
        condition={!!(subText || progress)}
        class={paginationWrapperClasses}
    >
        {#if progress}
            <Progress
                className="w-carousel-progress"
                value={progressValue}
            />
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
