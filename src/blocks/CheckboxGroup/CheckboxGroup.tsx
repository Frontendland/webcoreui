import { useRef } from 'react'
import { classNames } from 'webcoreui'
import { Checkbox } from 'webcoreui/react'

import SettingCard from '@blocks/SettingCard/SettingCard.tsx'

import type { CheckboxGroupProps } from './checkboxGroup'

export type Props = CheckboxGroupProps & {
    onChange?: (values: string[]) => void
}

const CheckboxGroup = ({
    items,
    name,
    columns,
    className,
    onChange,
    ...rest
}: Props) => {
    const initialValues = items
        .filter((item: CheckboxGroupProps['items'][number]) => item.checked)
        .map((item: CheckboxGroupProps['items'][number]) => item.value)

    const values = useRef<string[]>(initialValues)

    const handleOnChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement
        const value = target.value

        if (target.checked) {
            values.current = [
                ...values.current,
                value
            ]
        } else {
            values.current = values.current.filter(v => v !== value)
        }

        onChange?.(values.current)
    }

    return (
        <div className={classNames([
            'grid sm',
            columns && `xs-${columns}`,
            className
        ])}>
            {items?.map((item, index) => (
                <SettingCard
                    key={index}
                    title={item.label}
                    subTitle={item.subText}
                    icon={item.icon}
                    {...rest}
                >
                    <Checkbox
                        value={item.value}
                        checked={item.checked}
                        disabled={item.disabled}
                        name={name}
                        onChange={handleOnChange}
                    />
                </SettingCard>
            ))}
        </div>
    )
}

export default CheckboxGroup
