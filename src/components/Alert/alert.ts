export type AlertProps = {
    element?: string
    title?: string | null
    titleTag?: string
    titleProps?: any
    bodyProps?: any
    icon?: string | null
    className?: string | null
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
}

export type ReactAlertProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
} & Omit<AlertProps, 'titleTag' | 'element'>
