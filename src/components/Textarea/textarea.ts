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

export type SvelteTextareaProps = {
    onInput?: (event: Event & TextareaTarget) => void
    onChange?: (event: Event & TextareaTarget) => void
    onKeyUp?: (event: KeyboardEvent & TextareaTarget) => void
} & TextareaProps

export type ReactTextareaProps = {
    onInput?: (event: React.InputEvent<HTMLTextAreaElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
} & TextareaProps
