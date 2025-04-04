import type { Snippet } from 'svelte'

export type KbdProps = {
    keys?: ('cmd'
        | 'shift'
        | 'ctrl'
        | 'option'
        | 'enter'
        | 'del'
        | 'esc'
        | 'tab'
        | 'capslock'
        | 'up'
        | 'down'
        | 'left'
        | 'right'
        | 'pageup'
        | 'pagedown'
        | 'home'
        | 'end'
        | 'help'
        | 'space')[]
    className?: string
}

export type SvelteKbdProps = {
    children?: Snippet
} & KbdProps

export type ReactKbdProps = {
    children?: React.ReactNode
} & KbdProps
