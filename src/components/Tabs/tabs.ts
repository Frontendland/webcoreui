import type { Snippet } from 'svelte'

export type TabsProps = {
    items: {
        label: string
        value: string
        active?: boolean
        disabled?: boolean
    }[]
    theme?: 'boxed' | 'outline'
    vertical?: boolean
    even?: boolean
    className?: string
}

export type SvelteTabsProps = {
    children: Snippet
} & TabsProps

export type ReactTabsProps = {
    children: React.ReactNode
} & TabsProps
