import type { BlogCardProps } from '@blocks/BlogCard/blogCard'
import type { GridWithIconsProps } from '@blocks/GridWithIcons/gridWithIcons'
import type { HeroProps } from '@blocks/Hero/hero'
import type { IconListProps } from '@blocks/IconList/iconList'
import type { LayoutProps } from '@blocks/Layout/layout'
import type { ButtonProps, IconProps, RatingProps } from 'webcoreui/astro'

export type PortfolioProps = {
    layout: LayoutProps
    hero?: HeroProps
    aboutMe: {
        title?: string
        text: string
        services?: IconListProps['items']
        img?: {
            src: string
            alt: string
            width: number
            height: number
        }
    }
    ratings?: ({
        feedback: string
    } & RatingProps)[]
    ratingCta?: {
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps
    myWork?: {
        title?: string
        items: BlogCardProps[]
    }
    servicesTitle?: string
    services?: GridWithIconsProps
    servicesCta?: {
        text: string
        icon?: IconProps['type'] | string
    } & ButtonProps
    [key: string]: any
}
