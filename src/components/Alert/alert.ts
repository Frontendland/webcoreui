export type AlertProps = {
    element?: string
    title?: string | null
    titleTag?: string
    titleProps?: any
    bodyProps?: any
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
    icon?: React.ReactNode
    children: React.ReactNode
} & Omit<AlertProps, 'titleTag' | 'element'>
