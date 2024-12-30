<script lang="ts">
    import type { SvelteTextareaProps } from './textarea'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './textarea.module.scss'

    const {
        label,
        placeholder,
        subText,
        value = '',
        disabled,
        className,
        onChange,
        onKeyUp,
        ...rest
    }: SvelteTextareaProps = $props()

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
        onchange={onChange}
        onkeyup={onKeyUp}
        {...rest}
    >{value}</textarea>
    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
