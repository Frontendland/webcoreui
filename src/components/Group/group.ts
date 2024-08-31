export type GroupProps = {
    withSeparator?: boolean
    outline?: boolean
    className?: string
}

export type ReactGroupProps = {
    children: React.ReactNode
} & GroupProps
