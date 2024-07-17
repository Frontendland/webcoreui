import React, { useState } from 'react'
import type { ReactMenuProps } from './menu'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import styles from './menu.module.scss'
import { classNames } from '../../utils/classNames'

const Menu = ({
    items,
    logo,
    centerLogo,
    className,
    wrapperClassName,
    children
}: ReactMenuProps) => {
    const [active, setActive] = useState(false)

    const classes = classNames([
        styles.menu,
        className
    ])

    const containerClasses = classNames([
        styles.container,
        wrapperClassName
    ])

    const wrapMenu = logo?.url && items?.length && children

    const toggleMenu = () => setActive(!active)

    return (
        <header className={classes} data-active={active || null}>
            <div className={containerClasses}>
                <ConditionalWrapper
                    condition={!!wrapMenu}
                    wrapper={children => (
                        <div className={styles.wrapper}>
                            {children}
                        </div>
                    )}
                >
                    {logo?.url && !centerLogo &&  (
                        <a href="/">
                            <img
                                src={logo.url}
                                alt={logo.alt || 'Logo'}
                                width={logo.width}
                                height={logo.height}
                            />
                        </a>
                    )}

                    {!!items?.length && (
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url} target={item.target}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </ConditionalWrapper>
                
                {!!items?.length && (
                    <button className={styles.hamburger} onClick={toggleMenu}>
                        <span className={styles.meat}></span>
                        <span className={styles.meat}></span>
                        <span className={styles.meat}></span>
                        <span className={styles.meat}></span>
                    </button>
                )}

                {logo?.url && centerLogo && (
                    <a href="/">
                        <img
                            src={logo.url}
                            alt={logo.alt || 'Logo'}
                            width={logo.width}
                            height={logo.height}
                        />
                    </a>
                )}

                {children}
            </div>
        </header>
    )
}

export default Menu
