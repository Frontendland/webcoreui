import type { Snippet } from 'svelte'

export type SettingCardProps = {
   title: string
   subTitle?: string
}

export type SvelteSettingCardProps = {
    children: Snippet
} & SettingCardProps

export type ReactSettingCardProps = {
    children: React.ReactNode
} & SettingCardProps
