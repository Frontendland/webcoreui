import type { Snippet } from 'svelte'

import type { ButtonProps } from '../Button/button'

export type MenuProps = {
    items?: {
        href: string
        name: string
        target?: ButtonProps['target']
        active?: boolean
    }[]
    logo?: {
        url?: string
        alt?: string
        width?: number
        height?: number
        html?: string
    } | null
    centerLogo?: boolean
    className?: string
    wrapperClassName?: string
}

export type SvelteMenuProps = {
    children?: Snippet
} & MenuProps

export type ReactMenuProps = {
    children?: React.ReactNode
} & MenuProps
