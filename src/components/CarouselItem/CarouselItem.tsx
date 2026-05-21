import React from 'react'
import type { CarouselItemProps } from './carouselItem'

export type Props = CarouselItemProps & {
    children: React.ReactNode
}

const CarouselItem = ({
    active,
    className,
    children
}: Props) => (
    <li className={className} data-active={active}>
        {children}
    </li>
)

export default CarouselItem
