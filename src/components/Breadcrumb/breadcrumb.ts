export type BreadcrumbProps = {
    items: {
        icon?: string
        label?: string
        href?: string
        target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop'
    }[]
    separator?: string
    className?: string
}
