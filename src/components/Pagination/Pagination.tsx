import React, { useEffect, useState } from 'react'
import type { ReactPaginationProps } from './pagination'

import Button from '../Button/Button.tsx'

import { classNames } from '../../utils/classNames'

import ChevronLeft from '../../icons/chevron-left.svg?raw'
import ChevronRight from '../../icons/chevron-right.svg?raw'

import styles from './pagination.module.scss'

// eslint-disable-next-line complexity
const Pagination = ({
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
}: ReactPaginationProps) => {
    const [calculatedCurrentPage, setCalculatedCurrentPage] = useState(
        currentPage
            || (pages?.findIndex(page => page.active) || -1) + 1
            || 1
    )

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
        let currentPage = calculatedCurrentPage

        if (to === 'prev') {
            currentPage = calculatedCurrentPage - 1
        } else if (to === 'next') {
            currentPage = calculatedCurrentPage + 1
        } else {
            currentPage = to as number
        }

        const label = pages?.[currentPage - 1]?.label

        setCalculatedCurrentPage(currentPage)

        onChange?.({
            page: currentPage,
            direction: previousPage > currentPage ? 'prev' : 'next',
            ...(label && { label })
        })
    }

    useEffect(() => {
        if (currentPage) {
            setCalculatedCurrentPage(currentPage)
        }
    }, [currentPage])

    return (
        <ul className={classes}>
            {type === 'dots' ? (
                <React.Fragment>
                    {generatedPages?.map((_, index) => (
                        <li key={index}>
                            <button
                                aria-label={`page ${index + 1}`}
                                data-active={calculatedCurrentPage === index + 1 ? 'true' : null}
                                onClick={calculatedCurrentPage !== index + 1
                                    ? () => paginate(index + 1)
                                    : undefined
                                }
                            />
                        </li>
                    ))}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <li>
                        <Button
                            disabled={disablePrevious || (calculatedCurrentPage === 1 && !previousLink)}
                            href={!disablePrevious ? previousLink : undefined}
                            theme={theme}
                            onClick={!(disablePrevious || (calculatedCurrentPage === 1 && !previousLink))
                                ? () => paginate('prev')
                                : undefined
                            }
                        >
                            {(showChevrons || type === 'arrows') && (
                                <span dangerouslySetInnerHTML={{ __html: ChevronLeft }} />
                            )}
                            {type !== 'arrows' && previousPageLabel}
                        </Button>
                    </li>
                    <React.Fragment>
                        {type !== 'arrows' && pages?.slice(0, calculatedTotalPages)?.map((page, index) =>
                            <li key={index}>
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
                        )}
                        {showDots && (
                            <li>
                                <Button theme={theme} className={styles.inactive}>
                                    ...
                                </Button>
                            </li>
                        )}
                    </React.Fragment>
                    <li>
                        <Button
                            disabled={disableNext || calculatedCurrentPage === calculatedTotalPages}
                            href={!disableNext ? nextLink : undefined}
                            theme={theme}
                            onClick={!disableNext
                                ? () => paginate('next')
                                : undefined
                            }
                        >
                            {type !== 'arrows' && nextPageLabel}
                            {(showChevrons || type === 'arrows') && (
                                <span dangerouslySetInnerHTML={{ __html: ChevronRight }} />
                            )}
                        </Button>
                    </li>
                </React.Fragment>
            )}
        </ul>
    )
}

export default Pagination
