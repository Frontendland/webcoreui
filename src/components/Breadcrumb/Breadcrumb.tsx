import React from 'react'
import type { BreadcrumbProps } from './breadcrumb'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import ChevronRight from '../../icons/chevron-right.svg?raw'

import styles from './breadcrumb.module.scss'

const Breadcrumb = ({
    items,
    separator,
    className
}: BreadcrumbProps) => {
    const classes = classNames([
        styles.breadcrumb,
        className
    ])

    return (
        <ul className={classes}>
            {items?.map((item, index) => (
                <React.Fragment key={index}>
                    <li>
                        <ConditionalWrapper
                            condition={!!(item.href && index !== items.length - 1)}
                            wrapper={children => (
                                <a href={item.href} target={item.target}>{children}</a>
                            )}
                        >
                            {item.icon && <span dangerouslySetInnerHTML={{ __html: item.icon }} />}
                            {item.label}
                        </ConditionalWrapper>
                    </li>
                    {index < items.length - 1 && (
                        <li>
                            {separator
                                ? separator
                                : <span dangerouslySetInnerHTML={{ __html: ChevronRight }} />
                            }
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    )
}

export default Breadcrumb
