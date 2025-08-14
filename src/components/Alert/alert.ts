import type { JSX } from 'react'
import type { Snippet } from 'svelte'

export type AlertProps = {
    element?: string
    title?: string
    titleTag?: string
    titleProps?: any
    bodyProps?: any
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
    [key: string]: any
}

export type SvelteAlertProps = {
    icon?: Snippet
    children: Snippet
} & AlertProps

export type ReactAlertProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    icon?: React.ReactNode
    children: React.ReactNode
} & Omit<AlertProps, 'titleTag' | 'element'>
