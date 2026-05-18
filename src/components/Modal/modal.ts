export type ModalProps<T extends object = object> = {
    title?: string
    subTitle?: string
    showCloseIcon?: boolean
    closeOnEsc?: boolean
    closeOnOverlay?: boolean
    transparent?: boolean
    className?: string
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
} & T
