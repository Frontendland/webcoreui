import type { Snippet } from 'svelte'

export type PopoverProps = {
    id?: string
    className?: string
    [key: string]: any
}

export type SveltePopoverProps = {
    children: Snippet
} & PopoverProps

export type ReactPopoverProps = {
    isInteractive?: boolean
    children?: React.ReactNode
} & PopoverProps
