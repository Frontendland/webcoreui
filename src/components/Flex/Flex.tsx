import React, { type JSX } from 'react'
import type { FlexProps } from './flex'

import { classNames } from '../../utils/classNames'
import { getLayoutClasses } from '../../utils/getLayoutClasses'

export type ReactFlexProps = {
    Element?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<FlexProps, 'element'>

const Flex = ({
    Element = 'div',
    gap,
    alignment,
    direction,
    wrap,
    className,
    children,
    ...rest
}: ReactFlexProps) => {
    const classes = classNames([
        'flex',
        getLayoutClasses({ gap, alignment, direction, wrap }),
        className
    ])

    return (
        <Element className={classes} {...rest}>
            {children}
        </Element>
    )
}

export default Flex
