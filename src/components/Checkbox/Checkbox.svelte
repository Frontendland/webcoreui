<script lang="ts">
    import type { SvelteCheckboxProps } from './checkbox'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import check from '../../icons/check.svg?raw'

    import styles from './checkbox.module.scss'

    export let checked: SvelteCheckboxProps['checked'] = false
    export let label: SvelteCheckboxProps['label'] = ''
    export let subText: SvelteCheckboxProps['subText'] = ''
    export let disabled: SvelteCheckboxProps['disabled'] = false
    export let color: SvelteCheckboxProps['color'] = ''
    export let className: SvelteCheckboxProps['className'] = ''
    export let onClick: SvelteCheckboxProps['onClick'] = () => {}

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
            on:click={onClick}
            {...$$restProps}
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
