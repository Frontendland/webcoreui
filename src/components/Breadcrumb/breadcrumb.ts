import type { ButtonProps } from '../Button/button'

export type BreadcrumbProps = {
    items: {
        icon?: string
        label?: string
        href?: string
        target?: ButtonProps['target']
    }[]
    separator?: string
    className?: string
}
