import React, { type JSX } from 'react'
import type { ReactMasonryProps } from './masonry'

import { classNames } from '../../utils/classNames'

import styles from './masonry.module.scss'

const Masonry = ({
    items,
    element = 'section',
    gap,
    columns = 3,
    sequential,
    className
}: ReactMasonryProps) => {
    const classes = classNames([
        styles.masonry,
        className
    ])

    const componentProps = {
        className: classes,
        style: gap
            ? { '--w-masonry-gap': gap } as React.CSSProperties
            : undefined
    }

    const chunkSize = Math.ceil(items.length / columns!)
    const columnGroups = Array.from({ length: columns! }, (_, i) => {
        return sequential
            ? items.slice(i * chunkSize, (i + 1) * chunkSize)
            : items.filter((_, index) => index % columns! === i)
    })

    const Element = element as keyof JSX.IntrinsicElements

    return (
        <Element {...componentProps}>
            {columnGroups.map((column, columnKey) => (
                <div className={styles.column} key={columnKey}>
                    {column.map((item, itemKey) => (
                        item.component
                            ? <item.component {...item.props} key={itemKey}>
                                {typeof item.children === 'object'
                                    ? <item.children.component {...item.children.props}>
                                        <span dangerouslySetInnerHTML={{ __html: String(item.children.children) }} />
                                    </item.children.component>
                                    : <span dangerouslySetInnerHTML={{ __html: String(item.children) }} />
                                }
                            </item.component>
                            : <span
                                key={itemKey}
                                dangerouslySetInnerHTML={{ __html: String(item.html) }}
                            />
                    ))}
                </div>
            ))}
        </Element>
    )
}

export default Masonry
