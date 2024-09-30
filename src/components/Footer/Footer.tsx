import React from 'react'
import type { ReactFooterProps } from './footer'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import styles from './footer.module.scss'

const Footer = ({
    logo,
    columns,
    subText,
    className,
    wrapperClassName,
    subTextClassName,
    children
}: ReactFooterProps) => {
    const classes = classNames([
        styles.footer,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        wrapperClassName
    ])

    const subTextClasses = classNames([
        styles.subtext,
        subTextClassName
    ])

    return (
        <footer className={classes}>
            <div className={containerClasses}>
                <ConditionalWrapper
                    condition={!!(logo?.url || logo?.html)}
                    wrapper={children => <div className={styles.wrapper}>{children}</div>}
                >
                    {logo?.url && (
                        <a href="/">
                            <img
                                src={logo.url}
                                alt={logo.alt || 'Logo'}
                                width={logo.width}
                                height={logo.height}
                                loading={logo.eager ? undefined : 'lazy'}
                            />
                        </a>
                    )}

                    {logo?.html && (
                        <a
                            href="/"
                            aria-label={logo.alt || 'Logo'}
                            dangerouslySetInnerHTML={{ __html: logo.html }}
                        />
                    )}

                    {!!columns?.length && (
                        <ConditionalWrapper
                            condition={columns.length > 1}
                            wrapper={children => <div className={styles.columns}>{children}</div>}
                        >
                            {columns.map((column, columnIndex) => (
                                <ConditionalWrapper
                                    condition={!!column.title}
                                    wrapper={children => <div>{children}</div>}
                                    key={columnIndex}
                                >
                                    {column.title && (
                                        <strong className={styles['column-title']}>
                                            {column.title}
                                        </strong>
                                    )}
                                    <ul className={styles.column}>
                                        {column.items.map((item, itemKey) => (
                                            <li key={itemKey}>
                                                <a
                                                    href={item.href}
                                                    target={item.target}
                                                    className={item.active ? styles.active : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </ConditionalWrapper>
                            ))}
                        </ConditionalWrapper>
                    )}
                </ConditionalWrapper>
                {(subText || children) && (
                    <div className={subTextClasses}>
                        {subText && <span dangerouslySetInnerHTML={{ __html: subText }} />}
                        {children}
                    </div>
                )}
            </div>
        </footer>
    )
}

export default Footer

