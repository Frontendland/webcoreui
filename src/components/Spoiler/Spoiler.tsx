import React from 'react'
import type { ReactSpoilerProps } from './spoiler'

import { classNames } from '../../utils/classNames'

import styles from './spoiler.module.scss'

const Spoiler = ({
    color,
    animated = true,
    block,
    tooltip,
    tooltipPosition,
    children
}: ReactSpoilerProps) => {
    const classes = classNames([
        styles.spoiler,
        animated && styles.anim,
        block && styles.block
    ])

    const style = color
        ? { '--w-spoiler-color': color } as React.CSSProperties
        : undefined

    const toggle = (event: React.MouseEvent<HTMLSpanElement>) => {
        const target = event.currentTarget

        target.dataset.visible = 'true'
        target.removeAttribute('data-tooltip')
        target.removeAttribute('role')
        target.removeAttribute('tabindex')
    }

    return (
        <span
            className={classes}
            style={style}
            data-tooltip={tooltip}
            data-position={tooltipPosition}
            role="button"
            tabIndex={0}
            onClick={toggle}
        >
            {children}
        </span>
    )
}

export default Spoiler
