<script lang="ts">
    import type { InputProps } from './input'
    import ConditionalWrapper from '@components/ConditionalWrapper/ConditionalWrapper.svelte'
    import './input.scss'

    export let type: InputProps['type'] = 'text'
    export let theme: InputProps['theme'] = null
    export let label: InputProps['label'] = ''
    export let subText: InputProps['subText'] = ''
    export let fill: InputProps['fill'] = false
    export let className: InputProps['className'] = ''
    export let onChange: (e: any) => any = () => {}
    export let onKeyUp: (e: any) => any = () => {}

    const classes = [
        'w-input',
        theme,
        fill && 'fill',
        className
    ].filter(Boolean).join(' ')

    const useLabel = !!(label || subText || $$slots.icon)
</script>

<ConditionalWrapper
    condition={useLabel}
    element="label"
    class="w-input-label"
>
    {#if label}
        <div class="label">{label}</div>
    {/if}
    <ConditionalWrapper
        condition={$$slots.icon}
        element="div"
        class="input-wrapper"
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
        <div class="subtext">
            {@html subText}
        </div>
    {/if}
</ConditionalWrapper>
