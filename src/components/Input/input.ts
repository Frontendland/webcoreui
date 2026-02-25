import type { Snippet } from 'svelte'

export type InputTarget = {
    currentTarget: HTMLInputElement
}

export type InputProps = {
    type?: 'text'
        | 'email'
        | 'password'
        | 'number'
        | 'tel'
        | 'url'
        | 'search'
        | 'file'
        | 'date'
        | 'datetime-local'
        | 'month'
        | 'week'
        | 'time'
        | 'color'
    theme?: 'info'
        | 'success'
        | 'warning'
        | 'alert'
        | 'fill'
        | null
    value?: string | number
    name?: string
    placeholder?: string
    label?: string
    disabled?: boolean
    subText?: string
    maxLength?: number
    min?: number
    max?: number
    step?: number
    multiple?: boolean
    pattern?: string
    required?: boolean
    autofocus?: boolean
    autocomplete?: 'on' | 'off' | 'one-time-code'
    className?: string
    labelClassName?: string
    [key: string]: any
}

export type SvelteInputProps = {
    onChange?: (event: Event & InputTarget) => void
    onKeyUp?: (event: KeyboardEvent & InputTarget) => void
    onInput?: (event: Event & InputTarget) => void
    onClick?: (event: MouseEvent & InputTarget) => void
    children?: Snippet
} & InputProps

export type ReactInputProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onInput?: (event: React.InputEvent<HTMLInputElement>) => void
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
    children?: React.ReactNode
} & InputProps
