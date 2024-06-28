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
        | null
    value?: string | number
    name?: string
    placeholder?: string
    label?: string
    disabled?: boolean
    subText?: string
    fill?: boolean
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
} & InputProps

export type ReactInputProps = {
    onChange?: (e: any) => any
    onKeyUp?: (e: any) => any
    icon?: string
    children?: React.ReactNode
} & InputProps
