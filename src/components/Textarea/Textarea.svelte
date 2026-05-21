<script lang="ts">
    import type { HTMLTextareaAttributes } from 'svelte/elements'
    import type { TextareaProps, TextareaTarget } from './textarea'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './textarea.module.scss'

    export type Props = TextareaProps<HTMLTextareaAttributes> & {
        onInput?: (event: Event & TextareaTarget) => void
        onChange?: (event: Event & TextareaTarget) => void
        onKeyUp?: (event: KeyboardEvent & TextareaTarget) => void
    }

    const {
        label,
        subText,
        value = '',
        className,
        onChange,
        onKeyUp,
        onInput,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        styles.textarea,
        className
    ]))

    const useLabel = $derived(!!(label || subText))
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
        {...rest}
        class={classes}
        oninput={onInput}
        onchange={onChange}
        onkeyup={onKeyUp}
    >{value}</textarea>
    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
