export type ButtonBase = {
    theme?: 'secondary'
        | 'outline'
        | 'flat'
        | 'info'
        | 'success'
        | 'warning'
        | 'alert'
    className?: string
}

type AsButton<T extends object = object> = ButtonBase & {
    href?: never
    target?: never
    rel?: never
    download?: never
    hreflang?: never
    ping?: never
    referrerpolicy?: never
} & T

type AsAnchor<T extends object = object> = ButtonBase & {
    href?: string
    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | ''
    rel?: string
    download?: string | boolean
    hreflang?: string
    ping?: string
    referrerpolicy?: ReferrerPolicy
} & T

export type ButtonProps<T extends object = object> =
    | AsButton<T>
    | AsAnchor<T>
