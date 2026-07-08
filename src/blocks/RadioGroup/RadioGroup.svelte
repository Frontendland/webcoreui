<script lang="ts">
    import { classNames } from 'webcoreui'

    import SettingCard from '@blocks/SettingCard/SettingCard.svelte'

    import type { RadioGroupProps } from './radioGroup'
    import styles from './radio-group.module.scss'

    export type Props = RadioGroupProps & {
        onChange?: (value: string) => void
    }

    const {
        items,
        name,
        columns,
        className,
        onChange,
        ...rest
    }: Props = $props()

    const handleOnChange = (event: Event) => {
        const target = event.target as HTMLInputElement
        const value = target.value

        onChange?.(value)
    }
</script>

<div class={classNames([
    'grid sm',
    columns && `xs-${columns}`,
    styles.group,
    className
])}>
    {#each items as item}
        <SettingCard
            title={item.label}
            subTitle={item.subText}
            icon={item.icon}
            {...rest}
        >
            <label>
                <input
                    type="radio"
                    value={item.value}
                    checked={item.checked}
                    disabled={item.disabled}
                    name={name}
                    onchange={handleOnChange}
                />
                <span class={styles.icon}></span>
            </label>
        </SettingCard>
    {/each}
</div>
