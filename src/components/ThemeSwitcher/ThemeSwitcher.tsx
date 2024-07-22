import React, { useState, useEffect } from 'react'
import type { ReactThemeSwitcherProps } from './themeswitcher'

import { setCookie, getCookie } from '../../utils/cookies'
import { listen, dispatch } from '../../utils/event'
import { classNames } from '../../utils/classNames'

import styles from './themeswitcher.module.scss'

const ThemeSwitcher = ({
    themes,
    toggle,
    size,
    primaryIcon,
    secondaryIcon,
    className
}: ReactThemeSwitcherProps) => {
    const [currentTheme, setCurrentTheme] = useState('')
    const [toggled, setToggled] = useState(false)

    const classes = classNames([
        styles.switcher,
        toggle && styles.toggle,
        className
    ])

    const sizeStyles = size
        ? { '--w-theme-switcher-size': `${size}px` } as React.CSSProperties
        : undefined

    const primaryTheme = themes[Object.keys(themes)[0]]
    const secondaryTheme = themes[Object.keys(themes)[1]]
    const useIcons = primaryIcon && secondaryIcon 

    const setTheme = (theme: string | number) => {
        if (typeof theme === 'number') {
            theme = toggled ? primaryTheme : secondaryTheme
        }

        document.body.classList.replace(currentTheme, theme)

        setCookie('w-theme', theme, 30)
        localStorage.setItem('w-theme', theme)

        dispatch('theme-switched', theme)
    }

    useEffect(() => {
        setCurrentTheme(
            localStorage.getItem('w-theme')
            || getCookie('w-theme')
            || themes[Object.keys(themes)[0]]
        )

        if (toggle && currentTheme === secondaryTheme) {
            setToggled(true)
        }

        listen('theme-switched', theme => {
            setCurrentTheme(theme)
            setToggled(theme === secondaryTheme)
        })
    }, [])

    return (
        <div
            className={classes}
            style={sizeStyles}
        >
            {Object.keys(themes as {}).map((theme, index) => (
                <button
                    key={index}
                    data-active={currentTheme === themes[theme]}
                    onClick={() => setTheme(toggle ? index : themes[theme])}
                    style={!useIcons ? { background: theme } : undefined}
                    className={classNames([
                        styles.switch,
                        useIcons && styles.icons
                    ])}
                >
                    {index === 0 && primaryIcon}
                    {index !== 0 && secondaryIcon}
                </button>
            ))}
        </div>
    )
}

export default ThemeSwitcher
