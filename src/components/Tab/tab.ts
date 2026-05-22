export type TabProps<T extends object = object> = {
    element?: string
    id?: string
    active?: boolean
    className?: string
} & T
