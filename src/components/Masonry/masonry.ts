import type { FC } from 'react'
import type { SvelteComponent } from 'svelte'

type ChildrenProps<ComponentType> = {
    component: ComponentType
    children?: string | number
    props?: {
        [key: string]: any
    }
} | string | number

type Items<ComponentType> = {
    component?: ComponentType;
    children?: ChildrenProps<ComponentType>
    html?: string
    props?: {
        [key: string]: any
    }
}

export type MasonryProps = {
    items: Items<(_props: any) => any>[]
    element?: string
    gap?: string
    columns?: number
    sequential?: boolean
    className?: string
}

export type SvelteMasonryProps = {
    items: Items<typeof SvelteComponent<any>>[]
} & Omit<MasonryProps, 'items'>

export type ReactMasonryProps = {
    items: Items<FC<any>>[]
} & Omit<MasonryProps, 'items'>
