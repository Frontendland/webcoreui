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
