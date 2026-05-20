type BadgeBase = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    hover?: boolean
    small?: boolean
    rounded?: boolean
    transparent?: boolean
    className?: string
}

type AsSpan<T extends object = object> = BadgeBase & {
    onClick?: never
} & T

type AsButton<T extends object = object> = BadgeBase & {
    onClick: any
} & T

export type BadgeProps<T extends object = object> =
    | AsSpan<T>
    | AsButton<T>
