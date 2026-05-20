export type InputTarget = {
    currentTarget: HTMLInputElement
}

type InputType = 'text'
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

type InputTheme = 'info'
    | 'success'
    | 'warning'
    | 'alert'
    | 'fill'
    | null

export type InputProps<T extends object = object> = {
    type?: InputType
    theme?: InputTheme
    value?: string | number
    label?: string
    subText?: string
    className?: string
    labelClassName?: string
} & T
