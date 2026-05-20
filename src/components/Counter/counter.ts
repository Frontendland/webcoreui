import type { ButtonProps } from '../Button/button'
import type { IconProps } from '../Icon/icon'

export type CounterProps<T extends object = object> = {
    type?: 'compact' | 'buttons' | 'separated'
    theme?: ButtonProps['theme']
    rounded?: boolean
    minIcon?: IconProps['type'] | string
    maxIcon?: IconProps['type'] | string
    width?: string
    className?: string
} & T
