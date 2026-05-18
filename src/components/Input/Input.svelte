<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { InputProps, InputTarget } from './input'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './input.module.scss'

    export type SvelteInputProps = {
        onChange?: (event: Event & InputTarget) => void
        onKeyUp?: (event: KeyboardEvent & InputTarget) => void
        onInput?: (event: Event & InputTarget) => void
        onClick?: (event: MouseEvent & InputTarget) => void
        children?: Snippet
    } & InputProps

    let {
        type = 'text',
        theme,
        label,
        value = $bindable(''),
        subText,
        className,
        labelClassName,
        onChange,
        onKeyUp,
        onInput,
        onClick,
        children,
        ...rest
    }: SvelteInputProps = $props()

    const classes = $derived(classNames([
        styles.input,
        theme && styles[theme],
        className
    ]))

    const labelClasses = $derived(classNames([
        styles['input-label'],
        labelClassName
    ]))

    const useLabel = $derived(!!(label || subText || children))
</script>

<ConditionalWrapper
    condition={useLabel}
    element="label"
    class={labelClasses}
>
    {#if label}
        <div class={styles.label}>{@html label}</div>
    {/if}
    <ConditionalWrapper
        condition={!!children}
        element="div"
        class={styles.wrapper}
    >
        {@render children?.()}
        <input
            bind:value
            class={classes}
            onchange={onChange}
            onkeyup={onKeyUp}
            oninput={onInput}
            onclick={onClick}
            {...{ type }}
            {...rest}
        />
    </ConditionalWrapper>
    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
