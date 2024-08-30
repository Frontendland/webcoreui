import React, { useRef,useState } from 'react'
import type { ReactTabsProps } from './tabs'

import { classNames } from '../../utils/classNames'

import styles from './tabs.module.scss'

const Tabs = ({
    items,
    theme,
    vertical,
    even,
    className,
    children
}: ReactTabsProps) => {
    const tabContainer = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState('')

    const classes = classNames([
        styles.tabs,
        theme && styles[theme],
        vertical && styles.vertical,
        even && styles.even,
        className
    ])

    const setTab = (tab: string) => {
        const tabs = tabContainer.current!.querySelectorAll('[data-tab]')

        Array.from(tabs).forEach((item: any) => {
            item.dataset.active = false

            if (item.dataset.tab === tab) {
                item.dataset.active = true
            }
        })

        setActive(tab)
    }

    const isActive = (item: ReactTabsProps['items'][0]) => {
        if (!active) {
            return item.active ? 'true' : undefined
        }

        return active === item.value ? 'true' : undefined
    }

    return (
        <section className={classes}>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <button
                            key={index}
                            disabled={item.disabled}
                            dangerouslySetInnerHTML={{ __html: item.label }}
                            onClick={() => setTab(item.value)}
                            data-active={isActive(item)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.content} ref={tabContainer}>
                {children}
            </div>
        </section>
    )
}

export default Tabs
