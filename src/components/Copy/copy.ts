import { type BadgeProps } from '../Badge/badge'
import { type IconProps } from '../Icon/icon'

export type CopyProps = {
    tooltip?: string
    tooltipPosition?: 'left' | 'right' | 'bottom' | null
    copyIcon?: IconProps['type'] | string
    copiedIcon?: IconProps['type'] | string
    className?: string
} & BadgeProps

export type ReactCopyProps = {
    children: React.ReactNode
} & CopyProps
