export type ConditionalWrapperProps<T extends object = Record<string, unknown>> = {
    condition: boolean
} & T
