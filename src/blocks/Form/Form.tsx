import React from 'react'
import { classNames } from 'webcoreui'
import {
    Button,
    type ButtonProps,
    Checkbox,
    type CheckboxProps,
    Input,
    type InputProps,
    Radio,
    type RadioProps,
    Select,
    type SelectProps,
    Slider,
    type SliderProps,
    Switch,
    type SwitchProps,
    Textarea,
    type TextareaProps
} from 'webcoreui/react'

import type { FormProps } from './form'

export type ReactFormField =
    | ({ type: 'group', fields: ReactFormField[] })
    | ({ type: 'button', label: string } & ButtonProps)
    | ({ type: 'checkbox' } & CheckboxProps)
    | ({ type: 'radio' } & RadioProps)
    | ({ type: 'select' } & SelectProps)
    | ({ type: 'slider' } & SliderProps)
    | ({ type: 'switch' } & SwitchProps)
    | ({ type: 'textarea' } & TextareaProps)
    | ({ type: NonNullable<InputProps['type']> } & Omit<InputProps, 'type'>)

export type Props = Omit<FormProps, 'fields'> & {
    fields: ReactFormField[]
}

const Form = ({
    fields,
    gap,
    className,
    ...rest
}: Props) => {
    const classes = classNames([
        'flex column',
        gap || 'md',
        className
    ])

    const renderField = (field: ReactFormField) => {
        switch (field.type) {
            case 'button': return (
                <Button type="submit" {...(({ label, type, ...rest }) => rest)(field)}>
                    {field.label}
                </Button>
            )
            case 'checkbox': return <Checkbox {...field} />
            case 'radio': return <Radio {...field} />
            case 'select': return <Select {...field} />
            case 'slider': return <Slider {...field} />
            case 'switch': return <Switch {...field} />
            case 'textarea': return <Textarea {...field} />
            case 'group': return null
            default: return <Input {...field} />
        }
    }

    return (
        <form className={classes} {...rest}>
            {fields.map((field, index) => {
                if (field.type === 'group') {
                    return (
                        <div
                            key={index}
                            className={classNames(['grid', gap || 'md', `col-${field.fields.length}`])}
                        >
                            {field.fields.map((field, fieldIndex) => (
                                <React.Fragment key={fieldIndex}>
                                    {renderField(field)}
                                </React.Fragment>
                            ))}
                        </div>
                    )
                }

                return (
                    <React.Fragment key={index}>
                        {renderField(field)}
                    </React.Fragment>
                )
            })}
        </form>
    )
}

export default Form
