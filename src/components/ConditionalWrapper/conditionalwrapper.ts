export type ConditionalWrapperProps = {
    condition: boolean
    [key: string]: any
}

export type ReactConditionalWrapperProps = {
    wrapper: (_: React.ReactNode) => any
    children: React.ReactNode
} & ConditionalWrapperProps
