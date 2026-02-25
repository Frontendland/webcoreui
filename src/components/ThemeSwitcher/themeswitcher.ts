import type { Snippet } from 'svelte'

export type ThemeSwitcherProps = {
    themes: {
        [key: string]: string
    }
    toggle?: boolean
    size?: number
    className?: string
}

export type SvelteThemeSwitcherProps = {
    primaryIcon?: Snippet
    secondaryIcon?: Snippet
    children?: Snippet
} & ThemeSwitcherProps

export type ReactThemeSwitcherProps = {
    primaryIcon?: React.ReactNode
    secondaryIcon?: React.ReactNode
} & ThemeSwitcherProps
