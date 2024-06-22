import React, { useState, useRef } from 'react'
import type { TabsProps } from './tabs'

import './tabs.scss'

type ReactTabsProps = {
    children: React.ReactNode
} & TabsProps

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

    const classes = [
        'w-tabs',
        theme && theme,
        vertical && 'vertical',
        even && 'even',
        className
    ].filter(Boolean).join(' ')

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

    const isActive = (item: TabsProps['items'][0]) => {
        if (!active) {
            return item.active ? 'active' : undefined
        }

        return active === item.value ? 'active' : undefined
    }

    return (
        <section className={classes}>
            <div className="tabs-wrapper">
                <div className="tabs">
                    {items.map((item, index) => (
                        <button
                            key={index}
                            disabled={item.disabled}
                            dangerouslySetInnerHTML={{ __html: item.label }}
                            onClick={() => setTab(item.value)}
                            className={isActive(item)}
                        />
                    ))}
                </div>
            </div>
            <div className="tab-content" ref={tabContainer}>
                {children}
            </div>
        </section>
    )
}

export default Tabs
