import React from 'react'
import type { ReactSidebarProps } from './sidebar'

import Badge from '../Badge/Badge.tsx'

import { classNames } from '../../utils/classNames'

import styles from './sidebar.module.scss'

const Sidebar = ({
    groups,
    children,
    className
}: ReactSidebarProps) => {
    const classes = classNames([
        styles.sidebar,
        className
    ])

    return (
        <aside className={classes}>
            {groups.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                    {group.title && (
                        <strong>{group.title}</strong>
                    )}

                    <ul>
                        {group.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <a
                                    href={item.href}
                                    target={item.target}
                                    className={item.active ? styles.active : undefined}
                                >
                                    {item.icon && (
                                        <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    )}
                                    {item.name}
                                    {item.badge && (
                                        <Badge theme={item.badgeTheme || 'success'} small={true}>
                                            {item.badge}
                                        </Badge>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            ))}

            {children}
        </aside>
    )
}

export default Sidebar

