type Target = {
    target: HTMLTextAreaElement
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

export type SvelteTextareaProps = {
    onChange?: (event: Event & Target) => void
    onKeyUp?: (event: KeyboardEvent & Target) => void
} & TextareaProps

export type ReactTextareaProps = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement> & Target) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement> & Target) => void
} & TextareaProps
