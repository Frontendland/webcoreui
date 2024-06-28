<script lang="ts">
    import type { SvelteInputProps } from './input'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import styles from './input.module.scss'
    import { classNames } from '../../utils/classNames'

    export let type: SvelteInputProps['type'] = 'text'
    export let theme: SvelteInputProps['theme'] = null
    export let label: SvelteInputProps['label'] = ''
    export let subText: SvelteInputProps['subText'] = ''
    export let fill: SvelteInputProps['fill'] = false
    export let className: SvelteInputProps['className'] = ''
    export let onChange: SvelteInputProps['onChange'] = () => {}
    export let onKeyUp: SvelteInputProps['onKeyUp'] = () => {}

    const classes = classNames([
        styles.input,
        theme && styles[theme],
        fill && styles.fill,
        className
    ])

    const useLabel = !!(label || subText || $$slots.icon)
</script>

<ConditionalWrapper
    condition={useLabel}
    element="label"
    class={styles['input-label']}
>
    {#if label}
        <div class={styles.label}>{label}</div>
    {/if}
    <ConditionalWrapper
        condition={$$slots.icon}
        element="div"
        class={styles.wrapper}
    >
        <slot name="icon" />
        <input
            type={type}
            class={classes}
            on:change={onChange}
            on:keyup={onKeyUp}
            {...$$restProps}
        />
    </ConditionalWrapper>
    {#if label}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
