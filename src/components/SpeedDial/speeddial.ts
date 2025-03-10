import type { ButtonProps } from '../Button/button'
import type { IconProps } from '../Icon/icon'

export type SpeedDialProps = {
    items: {
        icon: IconProps['type'] | string
        href: string
        tooltip?: string
        target?: ButtonProps['target']
    }[]
    position?: 'top-left' | 'top-right' | 'bottom-left'
    horizontal?: boolean
    circular?: boolean
    theme?: ButtonProps['theme']
    icon?: IconProps['type'] | string
    triggerOnClick?: boolean
    className?: string
}
