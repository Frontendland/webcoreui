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
    autocomplete?: 'on' | 'off'
    className?: string
    labelClassName?: string
    [key: string]: any
}

export type SvelteInputProps = {
    onChange?: (event: Event & { currentTarget: HTMLInputElement }) => void
    onKeyUp?: (event: KeyboardEvent & { currentTarget: HTMLInputElement }) => void
    onInput?: (event: any) => void
    onClick?: (event: MouseEvent & { currentTarget: HTMLInputElement }) => void
} & InputProps

export type ReactInputProps = {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
    children?: React.ReactNode
} & InputProps
