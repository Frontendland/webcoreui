import React from 'react'
import type { GridWithIconsProps } from './gridWithIcons'

import styles from './grid-with-icons.module.scss'

import { classNames } from 'webcoreui'
import { ConditionalWrapper } from 'webcoreui/react'

const GridWithIcons = ({
    items,
    columns,
    alignment,
    iconWithBackground,
    secondary,
    className
}: GridWithIconsProps) => {
    const classes = classNames([
        `grid sm-${columns || 3}`,
        styles.list,
        alignment && styles[alignment],
        iconWithBackground && styles['icon-bg'],
        secondary && styles.secondary,
        className
    ])

    const wrapperClasses = classNames([
        'flex sm items-center',
        alignment === 'center' && 'justify-center',
        alignment === 'right' && 'justify-end'
    ])

    return (
        <ul className={classes}>
            {items?.map((item, index) => (
                <li className="grid sm" key={index}>
                    <ConditionalWrapper
                        condition={!!secondary}
                        wrapper={children => (
                            <div slot="wrapper" className={wrapperClasses}>
                                {children}
                            </div>
                        )}
                    >

                        {item.icon && (
                            <span
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                style={{ height: iconWithBackground ? '34px' : '24px' }}
                            />
                        )}

                        {item.title && (
                            <strong className={styles.title}>
                                {item.title}
                            </strong>
                        )}
                    </ConditionalWrapper>
                    <div
                        dangerouslySetInnerHTML={{ __html: item.text }}
                        className="muted"
                    />
                </li>
            ))}
        </ul>
    )
}

export default GridWithIcons
