import React from 'react'
import type { ReactGridProps } from './grid'

import { classNames } from '../../utils/classNames'
import { getLayoutClasses } from '../../utils/getLayoutClasses'

const Grid = ({
    Element = 'div',
    gap,
    column,
    className,
    children,
    ...rest
}: ReactGridProps) => {
    const classes = classNames([
        'grid',
        getLayoutClasses({ gap, column }),
        className
    ])

    return (
        <Element className={classes} {...rest}>
            {children}
        </Element>
    )
}

export default Grid
