export type CardProps<T extends object = Record<string, unknown>> = {
    element?: string
    title?: string
    titleTag?: string
    compact?: boolean
    className?: string
    bodyClassName?: string
    secondary?: boolean
    flat?: boolean
} & T
