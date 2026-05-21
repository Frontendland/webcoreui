import React from 'react'
import type { SpoilerProps } from './spoiler'

import { classNames } from '../../utils/classNames'

import styles from './spoiler.module.scss'

export type Props = SpoilerProps & {
    children: React.ReactNode
}

const Spoiler = ({
    color,
    animated = true,
    block,
    tooltip,
    tooltipPosition,
    children
}: Props) => {
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
