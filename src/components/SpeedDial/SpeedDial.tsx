import React, { useEffect, useState } from 'react'
import type { SpeedDialProps } from './speeddial'

import Button from '../Button/Button.tsx'

import { classNames } from '../../utils/classNames'
import { get, on } from '../../utils/DOMUtils'

import styles from './speeddial.module.scss'

const SpeedDial = ({
    items,
    position,
    horizontal,
    circular,
    theme,
    icon,
    triggerOnClick,
    className
}: SpeedDialProps) => {
    const [show, setShow] = useState(false)

    const classes = classNames([
        styles.dial,
        position && styles[position],
        horizontal && styles.horizontal,
        circular && styles.circular,
        className
    ])

    const getTooltipPosition = () => {
        const positionMap = {
            'top-left': 'right',
            'bottom-left': 'right',
            'horizontal': {
                'top-left': 'bottom',
                'top-right': 'bottom'
            }
        }

        return horizontal
            ? positionMap.horizontal[position as keyof typeof positionMap.horizontal]
            : positionMap[position as keyof typeof positionMap] || 'left'
    }

    const toggle = () => {
        setShow(!show)
    }

    useEffect(() => {
        const speedDial = get('[data-id="w-speed-dial"] button') as HTMLButtonElement

        const eventListener = (event: Event) => {
            if (!speedDial.contains((event.target || event.currentTarget) as HTMLElement)) {
                setShow(false)
            }
        }

        on(document, 'click', eventListener)

        return () => {
            document.removeEventListener('click', eventListener)
        }
    }, [])

    if (!items?.length) {
        return null
    }

    return (
        <div
            className={classes}
            data-id={triggerOnClick ? 'w-speed-dial' : null}
            data-show={triggerOnClick ? show : null}
        >
            <Button
                className={styles.trigger}
                onClick={triggerOnClick ? toggle : undefined}
                {...(theme && { theme })}
            >
                {icon && (
                    <span dangerouslySetInnerHTML={{ __html: icon }} />
                )}
                {!icon && <span>+</span>}
            </Button>

            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Button
                            data-tooltip={item.tooltip}
                            data-position={getTooltipPosition()}
                            href={item.href}
                            target={item.target}
                            className={styles.button}
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                            {...(theme && { theme })}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SpeedDial
