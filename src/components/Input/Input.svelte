<script lang="ts">
    import type { SvelteInputProps } from './input'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './input.module.scss'

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

    const classes = classNames([
        styles.input,
        theme && styles[theme],
        className
    ])

    const labelClasses = classNames([
        styles['input-label'],
        labelClassName
    ])

    const useLabel = !!(label || subText || children)
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
