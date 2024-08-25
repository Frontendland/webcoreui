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
    [key: string]: any
}

export type SvelteInputProps = {
    onChange?: (e: any) => any
    onKeyUp?: (e: any) => any
    onInput?: (e: any) => any
} & InputProps

export type ReactInputProps = {
    onChange?: (e: any) => any
    onKeyUp?: (e: any) => any
    onInput?: (e: any) => any
    children?: React.ReactNode
} & InputProps
