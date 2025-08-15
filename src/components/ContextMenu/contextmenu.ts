import type React from 'react'
import type { Snippet } from 'svelte'

export type ContextMenuProps = {
    element?: string
    className?: string
    [key: string]: any
}

export type SvelteContextMenuProps = {
    children: Snippet
    context: Snippet
} & ContextMenuProps

export type ReactContextMenuProps = {
    Element?: React.ElementType
    children: React.ReactNode
    context: React.ReactNode
} & Omit<ContextMenuProps, 'element'>
