import type { Snippet } from 'svelte'
import type { CardProps } from 'webcoreui/astro'

export type SettingCardProps = {
   title: string
   subTitle?: string
} & CardProps

export type SvelteSettingCardProps = {
    children: Snippet
    additionalContent?: Snippet
} & SettingCardProps

export type ReactSettingCardProps = {
    children: React.ReactNode
    additionalContent?: React.ReactNode
} & SettingCardProps
