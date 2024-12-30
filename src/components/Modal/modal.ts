import type { Snippet } from 'svelte'

export type ModalProps = {
    title?: string
    subTitle?: string
    showCloseIcon?: boolean
    closeOnEsc?: boolean
    closeOnOverlay?: boolean
    transparent?: boolean
    id?: string
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
    [key: string]: any
}

export type SvelteModalProps = {
    children: Snippet
} & ModalProps

export type ReactModalProps = {
    children?: React.ReactNode
} & ModalProps
