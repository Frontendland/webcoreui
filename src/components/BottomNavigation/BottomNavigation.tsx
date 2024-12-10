import React from 'react'
import type { BottomNavigationProps } from './bottomnavigation'

import { classNames } from '../../utils/classNames'

import styles from './bottomnavigation.module.scss'

type ElementType = BottomNavigationProps['items'][0] & {
    className: string
    dangerouslySetInnerHTML: {
        __html: string
    }
}

const BottomNavigation = ({
    items,
    separated,
    floating,
    maxWidth,
    className
}: BottomNavigationProps) => {
    const classes = classNames([
        styles.nav,
        separated && styles.separated,
        maxWidth && styles.bordered,
        floating && styles.floating,
        className
    ])

    const styleVariable = maxWidth
        ? { '--w-bottom-navigation-max-width': maxWidth } as React.CSSProperties
        : undefined

    const Element = ({ href, ...rest }: ElementType) => href
        ? <a {...rest} />
        : <div {...rest} />

    return (
        <nav className={classes} style={styleVariable}>
            <ul>
                {items?.map((item, index) => (
                    <li
                        key={index}
                        data-tooltip={item.tooltip}
                        className={classNames([item.icon && styles['with-icon']])}
                    >
                        <Element
                            href={item.href}
                            target={item.target}
                            className={styles.item}
                            dangerouslySetInnerHTML={{ __html: item.icon
                                ? `${item.icon} ${item.name}`
                                : (item.name || '')
                            }}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default BottomNavigation
