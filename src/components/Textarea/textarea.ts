export type TextareaTarget = {
    currentTarget: HTMLTextAreaElement
}

export type TextareaProps = {
    label?: string
    placeholder?: string
    subText?: string
    value?: string
    disabled?: boolean
    className?: string
    [key: string]: any
}
