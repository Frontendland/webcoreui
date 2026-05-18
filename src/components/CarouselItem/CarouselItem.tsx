import React from 'react'
import type { CarouselItemProps } from './carouselItem'

export type ReactCarouselItemProps = {
    children: React.ReactNode
} & CarouselItemProps

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
