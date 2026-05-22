import React, { useEffect, useRef, useState } from 'react'
import type { TabsProps } from './tabs'

import { classNames } from '../../utils/classNames'

import styles from './tabs.module.scss'

export type Props = TabsProps & {
    children: React.ReactNode
}

const Tabs = ({
    items,
    theme,
    vertical,
    even,
    className,
    children
}: Props) => {
    const tabContainer = useRef<HTMLDivElement>(null)
    const usedInAstro = useRef(false)

    const [active, setActive] = useState('')
    const hasActive = items.some(item => item.active)

    const classes = classNames([
        styles.tabs,
        theme && styles[theme],
        vertical && styles.vertical,
        even && styles.even,
        className
    ])

    const setTab = (tab: string, index: number) => {
        const contentChildren = usedInAstro.current
            ? Array.from(tabContainer.current!.children[0].children) as HTMLElement[]
            : Array.from(tabContainer.current!.children) as HTMLElement[]

        const hasExplicitTabs = contentChildren.some((el: HTMLElement) => el.dataset.tab)

        contentChildren.forEach((item: HTMLElement, i: number) => {
            if (hasExplicitTabs) {
                item.dataset.active = item.dataset.tab === tab ? 'true' : 'false'
            } else {
                item.dataset.active = i === index ? 'true' : 'false'
            }
        })

        setActive(tab)
    }

    const isActive = (item: Props['items'][0]) => {
        if (!active) {
            return item.active ? 'true' : undefined
        }

        return active === item.value ? 'true' : undefined
    }

    if (!hasActive) {
        items[0].active = true
    }

    useEffect(() => {
        usedInAstro.current = tabContainer.current?.children[0]?.nodeName === 'ASTRO-SLOT'

        const contentChildren = usedInAstro.current
            ? Array.from(tabContainer.current!.children[0].children) as HTMLElement[]
            : Array.from(tabContainer.current!.children) as HTMLElement[]

        if (!contentChildren.some(element => element.dataset.active === 'true')) {
            const index = items.findIndex(item => item.active)

            contentChildren[index].dataset.active = 'true'
        }
    }, [])

    return (
        <section className={classes}>
            <div className={styles.wrapper}>
                <div className={styles.items}>
                    {items.map((item, index) => (
                        <button
                            key={index}
                            disabled={item.disabled}
                            dangerouslySetInnerHTML={{ __html: item.label }}
                            onClick={() => setTab(item.value, index)}
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
