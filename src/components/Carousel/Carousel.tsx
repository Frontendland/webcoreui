import React, { useEffect, useRef, useState } from 'react'
import type { ReactCarouselProps } from './carousel'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'
import Pagination from '../Pagination/Pagination.tsx'
import Progress from '../Progress/Progress.tsx'

import { classNames } from '../../utils/classNames'
import { debounce as debounceScroll } from '../../utils/debounce'
import { getBreakpoint } from '../../utils/getBreakpoint'

import styles from './carousel.module.scss'

import type { PaginationEventType } from '../Pagination/pagination'

const Carousel = ({
    items,
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
    onScroll,
    children
}: ReactCarouselProps) => {
    const getItemsPerSlide = () => {
        if (carousel.current) {
            return typeof itemsPerSlide === 'number'
                ? itemsPerSlide
                : itemsPerSlide[getBreakpoint()] || itemsPerSlide.default || 1
        }

        return typeof itemsPerSlide === 'number'
            ? itemsPerSlide
            : itemsPerSlide.default || 1
    }

    const carouselContainer = useRef<HTMLDivElement>(null)
    const carousel = useRef<HTMLUListElement>(null)
    const carouselItems = useRef<any>(null)
    const paginated = useRef(false)
    const currentPage = useRef(1)
    const totalPages = useRef(Math.ceil(items / getItemsPerSlide()))

    const [progressValue, setProgressValue] = useState(0)
    const [updatedSubText, setUpdatedSubText] = useState(subText)
    const [style, setStyle] = useState(getItemsPerSlide() > 1
        ? { '--w-slide-width': `calc(${100 / getItemsPerSlide()}% - 5px)` } as React.CSSProperties
        : undefined)

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

    const updateValues = (page: number) => {
        const activeElement = carouselItems.current[page - 1]

        Array.from(carouselItems.current).forEach(li => (li as HTMLLIElement).removeAttribute('data-active'))
        activeElement.dataset.active = 'true'

        if (subTextValue) {
            setUpdatedSubText(
                subTextValue
                    .replace('{0}', String(page))
                    .replace('{1}', String(totalPages.current))
            )
        }

        if (progress) {
            const percentage = (100 / (totalPages.current - 1))

            setProgressValue(percentage * (page - 1))
        }

        onScroll?.(page)
    }

    const scroll = debounceScroll((event: Event) => {
        if (!paginated.current) {
            const target = event.target as HTMLDivElement
            const scrollLeft = target.scrollLeft
            const itemWidth = target.children[0].clientWidth
            const page = Math.round(scrollLeft / itemWidth) + 1

            currentPage.current = page

            updateValues(page)
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

        const liElement = carouselItems.current[pageIndex]

        liElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

        currentPage.current = event.page
        paginated.current = true

        updateValues(event.page)
        setTimeout(() => {
            paginated.current = false
        }, 300)
    }

    const updateOnResize = () => {
        currentPage.current = 1
        setProgressValue(0)
        totalPages.current = Math.ceil(items / getItemsPerSlide())
        setStyle(prevStyle => ({
            ...prevStyle,
            '--w-slide-width': `calc(${100 / getItemsPerSlide()}% - 5px)`
        }) as React.CSSProperties)

        if (subTextValue) {
            setUpdatedSubText(subTextValue
                .replace('{0}', '1')
                .replace('{1}', String(totalPages.current))
            )
        }
    }

    useEffect(() => {
        const usedInAstro = carousel.current?.children[0].nodeName === 'ASTRO-SLOT'
        const observer = new ResizeObserver(updateOnResize)

        carouselItems.current = usedInAstro
            ? carousel.current?.querySelectorAll('li')
            : carousel.current?.children

        carouselContainer.current?.addEventListener('scroll', scroll)

        if (typeof itemsPerSlide !== 'number') {
            observer.observe(carouselContainer.current!)
        }

        return () => {
            carouselContainer.current?.removeEventListener('scroll', scroll)
        }
    }, [])

    return (
        <section className={classes}>
            <div className={containerClasses} ref={carouselContainer}>
                <ul className={wrapperClasses} style={style} ref={carousel}>
                    {children}
                </ul>
            </div>
            <ConditionalWrapper
                condition={!!(subText || progress)}
                wrapper={children => (
                    <div className={paginationWrapperClasses}>{children}</div>
                )}
            >
                {progress && (
                    <Progress value={progressValue} />
                )}
                <Pagination
                    type="arrows"
                    {...pagination}
                    currentPage={currentPage.current}
                    totalPages={totalPages.current}
                    className={paginationClasses}
                    onChange={paginate}
                />
                {updatedSubText && (
                    <span className={styles.subtext}>
                        {updatedSubText
                            .replace('{0}', '1')
                            .replace('{1}', String(totalPages.current))
                        }
                    </span>
                )}
            </ConditionalWrapper>
        </section>
    )
}

export default Carousel
