<script lang="ts">
    import type { ChangeEventHandler, HTMLInputAttributes, MouseEventHandler } from 'svelte/elements'
    import type { CheckboxProps } from './checkbox'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import check from '../../icons/check.svg?raw'

    import styles from './checkbox.module.scss'

    export type SvelteCheckboxProps = {
        onChange?: ChangeEventHandler<HTMLInputElement>
        onClick?: MouseEventHandler<HTMLInputElement>
    } & CheckboxProps<HTMLInputAttributes>

    const {
        label,
        subText,
        color,
        className,
        onClick,
        onChange,
        ...rest
    }: SvelteCheckboxProps = $props()

    const classes = $derived(classNames([
        styles.checkbox,
        label && subText && styles.col,
        className
    ]))

    const style = $derived(color
        ? `--w-checkbox-color: ${color};`
        : null
    )
</script>

<label class={classes} style={style}>
    <ConditionalWrapper
        condition={!!(label && subText)}
        element="div"
        class={styles.wrapper}
    >
        <input
            {...rest}
            type="checkbox"
            onclick={onClick}
            onchange={onChange}
        />
        <span class={styles.check}>
            {@html check}
        </span>
        {#if label}
            <span class={styles.label}>
                {@html label}
            </span>
        {/if}
    </ConditionalWrapper>
    {#if label && subText}
        <span class={styles.text}>{@html subText}</span>
    {/if}
</label>
