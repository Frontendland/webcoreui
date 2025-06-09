import type { Gap } from 'webcoreui'
import type {
    ButtonProps,
    CheckboxProps,
    InputProps,
    RadioProps,
    SelectProps,
    SliderProps,
    SwitchProps,
    TextareaProps
} from 'webcoreui/astro'

export type FormField =
    | ({ type: 'button', label: string } & ButtonProps)
    | ({ type: 'checkbox' } & CheckboxProps)
    | ({ type: 'radio' } & RadioProps)
    | ({ type: 'select' } & SelectProps)
    | ({ type: 'slider' } & SliderProps)
    | ({ type: 'switch' } & SwitchProps)
    | ({ type: 'textarea' } & TextareaProps)
    | ({ type: InputProps['type'] } & Omit<InputProps, 'type'>)

export type FormProps = {
    fields: FormField[]
    gap?: Gap
    className?: string
    id?: string
    name?: string
    action?: string
    method?: 'post' | 'get' | 'dialog'
    noValidate?: boolean
    target?: ButtonProps['target']
    enctype?: 'application/x-www-form-urlencoded'
        | 'multipart/form-data'
        |'text/plain'
}

