export type ConditionalWrapperProps = {
    condition: boolean
}

export type ReactConditionalWrapperProps = {
    wrapper: (_: React.ReactNode) => any
    children: React.ReactNode
} & ConditionalWrapperProps
