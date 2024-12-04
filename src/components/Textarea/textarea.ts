export type TextareaProps = {
    label?: string
    placeholder?: string
    subText?: string
    value?: string
    disabled?: boolean
    className?: string
    [key: string]: any
}

export type SvelteTextareaProps = {
    onChange?: (e: any) => any
    onKeyUp?: (e: any) => any
} & TextareaProps

export type ReactTextareaProps = {
    onChange?: (e: any) => any
    onKeyUp?: (e: any) => any
} & TextareaProps
