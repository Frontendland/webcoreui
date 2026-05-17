import React from 'react'
import type { ReactCarouselItemProps } from './carouselItem'

const CarouselItem = ({
    active,
    className,
    children
}: ReactCarouselItemProps) => (
    <li className={className} data-active={active}>
        {children}
    </li>
)

export default CarouselItem
