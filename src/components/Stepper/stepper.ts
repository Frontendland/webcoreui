import type { IconProps } from '../Icon/icon'

export type StepperProps = {
    items: {
        icon?: IconProps['type'] | string
        title?: string
        subTitle?: string
        completed?: boolean
        active?: boolean
    }[]
    color?: string
    completedColor?: string
    activeColor?: string
    vertical?: boolean
    className?: string
}
