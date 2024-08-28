export type PopoverProps = {
    id?: string
    className?: string
    [key: string]: any
}

export type ReactPopoverProps = {
    isInteractive?: boolean
    children?: React.ReactNode
} & PopoverProps
