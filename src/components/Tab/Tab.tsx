import React from 'react'
import type { TabProps } from './tab'

export type Props = TabProps<React.HTMLAttributes<HTMLElement>> & {
    children: React.ReactNode
}

const Tab = ({
    element = 'div',
    id,
    active,
    className,
    children,
    ...rest
}: Props) => {
    const Element = element as React.ElementType<React.HTMLAttributes<HTMLElement>>

    return (
        <Element
            {...rest}
            className={className}
            data-tab={id}
            data-active={active}
        >
            {children}
        </Element>
    )
}

export default Tab
