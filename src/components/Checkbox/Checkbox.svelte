<script lang="ts">
    import type { SvelteCheckboxProps } from './checkbox'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import check from '../../icons/check.svg?raw'

    import styles from './checkbox.module.scss'

    const {
        checked,
        label,
        subText,
        disabled,
        color,
        className,
        onClick,
        onChange,
        ...rest
    }: SvelteCheckboxProps = $props()

    const classes = classNames([
        styles.checkbox,
        label && subText && styles.col,
        className
    ])

    const style = color
        ? `--w-checkbox-color: ${color};`
        : null
</script>

<label class={classes} style={style}>
    <ConditionalWrapper
        condition={!!(label && subText)}
        element="div"
        class={styles.wrapper}
    >
        <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onclick={onClick}
            onchange={onChange}
            {...rest}
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
