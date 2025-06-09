import React from 'react'
import { classNames } from 'webcoreui'
import {
    Button,
    Checkbox,
    Input,
    Radio,
    Select,
    Slider,
    Switch,
    Textarea
} from 'webcoreui/react'

import type { FormProps } from './form'

const Form = ({
    fields,
    gap,
    className,
    ...rest
}: FormProps) => {
    const classes = classNames([
        'grid',
        gap || 'md',
        className
    ])

    return (
        <form className={classes} {...rest}>
            {fields.map(field => {
                switch (field.type) {
                    case 'button': return (
                        <Button type="submit" {...(({ label, type, ...rest }) => rest)(field)}>{field.label}</Button>
                    )
                    case 'checkbox': return <Checkbox {...field} />
                    case 'radio': return <Radio {...field} />
                    case 'select': return <Select {...field} />
                    case 'slider': return <Slider {...field} />
                    case 'switch': return <Switch {...field} />
                    case 'textarea': return <Textarea {...field} />
                    default: return <Input {...field} />
                }
            })}
        </form>
    )
}

export default Form
