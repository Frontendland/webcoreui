import type { CardProps, IconProps } from 'webcoreui/astro'

export type SettingCardProps = {
   icon?: IconProps['type'] | string
   title: string
   subTitle?: string
} & CardProps

