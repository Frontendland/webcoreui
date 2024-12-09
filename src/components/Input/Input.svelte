<script lang="ts">
    import type { SvelteInputProps } from './input'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './input.module.scss'

    export let type: SvelteInputProps['type'] = 'text'
    export let theme: SvelteInputProps['theme'] = null
    export let label: SvelteInputProps['label'] = ''
    export let value: SvelteInputProps['value'] = ''
    export let subText: SvelteInputProps['subText'] = ''
    export let className: SvelteInputProps['className'] = ''
    export let labelClassName: SvelteInputProps['labelClassName'] = ''
    export let onChange: SvelteInputProps['onChange'] = () => {}
    export let onKeyUp: SvelteInputProps['onKeyUp'] = () => {}
    export let onInput: SvelteInputProps['onInput'] = () => {}
    export let onClick: SvelteInputProps['onClick'] = () => {}

    const classes = classNames([
        styles.input,
        theme && styles[theme],
        className
    ])

    const labelClasses = classNames([
        styles['input-label'],
        labelClassName
    ])

    const useLabel = !!(label || subText || $$slots.default)
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
        condition={$$slots.default}
        element="div"
        class={styles.wrapper}
    >
        <slot />
        <input
            class={classes}
            bind:value
            on:change={onChange}
            on:keyup={onKeyUp}
            on:input={onInput}
            on:click={onClick}
            {...{ type }}
            {...$$restProps}
        />
    </ConditionalWrapper>
    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
