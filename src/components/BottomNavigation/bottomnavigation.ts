import type { ButtonProps } from '../Button/button'
import type { IconProps } from '../Icon/icon'

export type BottomNavigationProps = {
    items: {
        name?: string
        href?: string
        target?: ButtonProps['target']
        icon?: IconProps['type'] | string
        tooltip?: string
    }[]
    separated?: boolean
    floating?: boolean
    maxWidth?: string
    className?: string
}
