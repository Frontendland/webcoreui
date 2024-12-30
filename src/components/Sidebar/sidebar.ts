import type { Snippet } from 'svelte'

import type { ButtonProps } from '../Button/button'

export type SidebarProps = {
    groups: {
        title?: string
        items: {
            name: string
            href: string
            target?: ButtonProps['target']
            active?: boolean
            icon?: string
            badge?: string
            badgeTheme?: ButtonProps['theme']
        }[]
    }[]
    className?: string
}

export type SvelteSidebarProps = {
    children?: Snippet
} & SidebarProps

export type ReactSidebarProps = {
    children?: React.ReactNode
} & SidebarProps
