import React, { useState } from 'react'
import type { ReactMenuProps } from './menu'

import styles from './menu.module.scss'
import { classNames } from '../../utils/classNames'

const Menu = ({
    items,
    logo,
    centerLogo,
    className,
    children
}: ReactMenuProps) => {
    const [active, setActive] = useState(false)

    const classes = classNames([
        styles.menu,
        className
    ])

    const toggleMenu = () => setActive(!active)

    return (
        <header className={classes} data-active={active || null}>
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

            {items && (
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

            <button className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.meat}></span>
                <span className={styles.meat}></span>
                <span className={styles.meat}></span>
                <span className={styles.meat}></span>
            </button>

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
        </header>
    )
}

export default Menu
