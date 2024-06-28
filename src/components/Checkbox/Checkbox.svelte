<script lang="ts">
    import type { CheckboxProps } from './checkbox'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    
    import check from '../../icons/check.svg?raw'
    
    import styles from './checkbox.module.scss'
    import { classNames } from '../../utils/classNames'
    
    export let checked: CheckboxProps['checked'] = false
    export let label: CheckboxProps['label'] = ''
    export let subText: CheckboxProps['subText'] = ''
    export let disabled: CheckboxProps['disabled'] = false
    export let boxed: CheckboxProps['boxed'] = false
    export let color: CheckboxProps['color'] = ''
    export let onClick: () => any = () => {}

    const classes = classNames([
        styles.checkbox,
        boxed && styles.boxed,
        label && subText && styles.col
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
