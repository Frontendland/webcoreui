export type ChildrenProps<ComponentType> = {
    component: ComponentType
    children?: string | number
    props?: {
        [key: string]: any
    }
} | string | number

export type Items<ComponentType> = {
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
