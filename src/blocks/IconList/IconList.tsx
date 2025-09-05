import React from 'react'
import { classNames } from 'webcoreui'

import type { IconListProps } from './iconList'
import styles from './icon-list.module.scss'

const IconList = ({
    items,
    color,
    columns,
    className
}: IconListProps) => {
    const classes = classNames([
        styles.list,
        className
    ])

    const getColor = (color: string | undefined) => {
        return color
            ? { '--w-icon-list-color': color } as React.CSSProperties
            : undefined
    }

    const styleVariables = {
        ...(color && getColor(color)),
        ...(columns && { '--w-icon-list-columns': columns })
    } as React.CSSProperties

    return (
        <ul className={classes} style={styleVariables || null}>
            {items.map((item, index) => (
                <li style={getColor(item.color)} key={index}>
                    <span dangerouslySetInnerHTML={{ __html: item.icon }} style={{ height: 24 }} />
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </li>
            ))}
        </ul>
    )
}

export default IconList
