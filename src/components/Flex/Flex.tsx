import React from 'react'
import type { ReactFlexProps } from './flex'

import { classNames } from '../../utils/classNames'
import { getLayoutClasses } from '../../utils/getLayoutClasses'

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
