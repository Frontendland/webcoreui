<script lang="ts">
    import type { SvelteTextareaProps } from './textarea'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './textarea.module.scss'

    export let label: SvelteTextareaProps['label'] = ''
    export let placeholder: SvelteTextareaProps['placeholder'] = ''
    export let subText: SvelteTextareaProps['subText'] = ''
    export let value: SvelteTextareaProps['value'] = ''
    export let disabled: SvelteTextareaProps['disabled'] = false
    export let className: SvelteTextareaProps['className'] = ''
    export let onChange: SvelteTextareaProps['onChange'] = () => {}
    export let onKeyUp: SvelteTextareaProps['onKeyUp'] = () => {}

    const classes = classNames([
        styles.textarea,
        className
    ])

    const useLabel = !!(label || subText)
</script>

<ConditionalWrapper
    condition={useLabel}
    element="label"
    class={styles['label-wrapper']}
>
    {#if label}
        <div class={styles.label}>{label}</div>
    {/if}
    <textarea
        placeholder={placeholder}
        disabled={disabled}
        class={classes}
        on:change={onChange}
        on:keyup={onKeyUp}
    >{value}</textarea>
    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
