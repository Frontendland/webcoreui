export type TextareaTarget = {
    currentTarget: HTMLTextAreaElement
}

export type TextareaProps<T extends object = object> = {
    label?: string
    subText?: string
    value?: string
    className?: string
} & T
