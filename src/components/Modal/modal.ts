export type ModalProps = {
    title?: string
    subTitle?: string
    showCloseIcon?: boolean
    closeOnEsc?: boolean
    closeOnOverlay?: boolean
    id?: string
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | null
    [key: string]: any
}

export type ReactModalProps = {
    children?: React.ReactNode
} & ModalProps
