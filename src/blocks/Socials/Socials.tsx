import React from 'react'
import { classNames } from 'webcoreui'
import { Icon } from 'webcoreui/react'

import { iconMap } from './iconMap'
import type { SocialsProps } from './socials'
import styles from './socials.module.scss'


const Socials = ({
    links,
    size,
    color,
    theme,
    className
}: SocialsProps) => {
    const classes = classNames([
        styles.socials,
        className
    ])

    const getDomain = (str: string) => new URL(str).hostname
        .replace('www.', '')
        .replace('twitter', 'x')
        .split('.')[0]


    if (!links?.length) {
        return null
    }

    return (
        <ul className={classes}>
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                        <Icon
                            iconSet={iconMap}
                            size={size}
                            color={color}
                            theme={theme}
                            type={iconMap[getDomain(link) as keyof typeof iconMap]
                                ? getDomain(link)
                                : 'website'
                            }
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
