import { classNames } from 'webcoreui'

import SettingCard from '@blocks/SettingCard/SettingCard.tsx'

import type { RadioGroupProps } from './radioGroup'
import styles from './radio-group.module.scss'

export type Props = RadioGroupProps & {
    onChange?: (value: string) => void
}

const RadioGroup = ({
    items,
    name,
    columns,
    className,
    onChange,
    ...rest
}: Props) => {
    const handleOnChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement
        const value = target.value

        onChange?.(value)
    }

    return (
        <div className={classNames([
            'grid sm',
            columns && `xs-${columns}`,
            styles.group,
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
                    <label>
                        <input
                            type="radio"
                            value={item.value}
                            defaultChecked={item.checked}
                            disabled={item.disabled}
                            name={name}
                            onChange={handleOnChange}
                        />
                        <span className={styles.icon} />
                    </label>
                </SettingCard>
            ))}
        </div>
    )
}

export default RadioGroup
