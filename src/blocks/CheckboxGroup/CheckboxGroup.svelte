<script lang="ts">
    import { classNames } from 'webcoreui'
    import { Checkbox } from 'webcoreui/svelte'

    import SettingCard from '@blocks/SettingCard/SettingCard.svelte'

    import type { CheckboxGroupProps } from './checkboxGroup'

    export type Props = CheckboxGroupProps & {
        onChange?: (values: string[]) => void
    }

    const {
        items,
        name,
        columns,
        className,
        onChange,
        ...rest
    }: Props = $props()

    const initialValues = $derived(items
        .filter((item: CheckboxGroupProps['items'][number]) => item.checked)
        .map((item: CheckboxGroupProps['items'][number]) => item.value)
    )

    let values = $derived<string[]>(initialValues)

    const handleOnChange = (event: Event) => {
        const target = event.target as HTMLInputElement
        const value = target.value

        if (target.checked) {
            values = [
                ...values,
                value
            ]
        } else {
            values = values.filter(v => v !== value)
        }

        onChange?.(values)
    }
</script>

<div class={classNames([
    'grid sm',
    columns && `xs-${columns}`,
    className
])}>
    {#each items as item}
        <SettingCard
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
    {/each}
</div>
