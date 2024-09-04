export type GroupProps = {
    withSeparator?: boolean
    className?: string
}

export type ReactGroupProps = {
    children: React.ReactNode
} & GroupProps
