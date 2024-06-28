<script lang="ts">
    import type { SvelteCheckboxProps } from './checkbox'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    
    import check from '../../icons/check.svg?raw'
    
    import styles from './checkbox.module.scss'
    import { classNames } from '../../utils/classNames'
    
    export let checked: SvelteCheckboxProps['checked'] = false
    export let label: SvelteCheckboxProps['label'] = ''
    export let subText: SvelteCheckboxProps['subText'] = ''
    export let disabled: SvelteCheckboxProps['disabled'] = false
    export let boxed: SvelteCheckboxProps['boxed'] = false
    export let color: SvelteCheckboxProps['color'] = ''
    export let onClick: SvelteCheckboxProps['onClick'] = () => {}

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
