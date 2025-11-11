import type { ButtonProps } from '../Button/button'
import type { IconProps } from '../Icon/icon'

export type CounterProps = {
    type?: 'compact' | 'buttons' | 'separated'
    theme?: ButtonProps['theme']
    rounded?: boolean
    minIcon?: IconProps['type'] | string
    maxIcon?: IconProps['type'] | string
    width?: string
    className?: string
    [key: string]: any
}

export type SvelteCounterProps = {
    onChange?: (value: number) => void
} & CounterProps

export type ReactCounterProps = {
    onChange?: (value: number) => void
} & CounterProps
