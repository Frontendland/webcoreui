import React, { useState } from 'react'
import type { ReactCollapsibleProps } from './collapsible'

import styles from './collapsible.module.scss'
import { classNames } from '../../utils/classNames'

const Collapsible = ({
    initialHeight,
    maxHeight,
    toggled,
    on,
    off,
    children,
    className,
    togglesClassName
}: ReactCollapsibleProps) => {
    const [toggle, setToggled] = useState(toggled)

    const classes = classNames([
        styles.collapsible,
        maxHeight && styles.animated,
        className
    ])

    const styleVariables = {
        ...(initialHeight && { '--w-collapsible-initial-height': initialHeight }),
        ...(maxHeight && { '--w-collapsible-max-height': maxHeight })
    } as React.CSSProperties

    return (
        <div
            className={classes}
            data-toggled={toggle ? 'true' : undefined}
        >
            <div
                className={styles.wrapper}
                style={styleVariables}
            >
                {children}
            </div>
            <div
                onClick={() => setToggled(!toggle)}
                onKeyUp={() => setToggled(!toggle)}
                role="button"
                tabIndex={0}
                className={togglesClassName}
            >
                {toggle ? off : on}
            </div>
        </div>
    )
}

export default Collapsible
