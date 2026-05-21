import React, { type JSX } from 'react'
import type { GridProps } from './grid'

import { classNames } from '../../utils/classNames'
import { getLayoutClasses } from '../../utils/getLayoutClasses'

export type Props = Omit<GridProps, 'element'> & {
    Element?: keyof JSX.IntrinsicElements
    children: React.ReactNode
}

const Grid = ({
    Element = 'div',
    gap,
    column,
    className,
    children,
    ...rest
}: Props) => {
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
