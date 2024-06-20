<script lang="ts">
    import type { CheckboxProps } from './checkbox'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'
    
    import check from '../../icons/check.svg?raw'
    
    import './checkbox.scss'
    
    export let checked: CheckboxProps['checked'] = false
    export let label: CheckboxProps['label'] = ''
    export let subText: CheckboxProps['subText'] = ''
    export let disabled: CheckboxProps['disabled'] = false
    export let boxed: CheckboxProps['boxed'] = false
    export let color: CheckboxProps['color'] = ''
    export let onClick: () => any = () => {}
    
    const classes = [
        'w-checkbox',
        boxed && 'boxed',
        label && subText && 'col'
    ].filter(Boolean).join(' ')
    
    const style = color
        ? `--w-checkbox-color: ${color};`
        : null
</script>

<label class={classes} style={style} on:click={onClick}>
    <ConditionalWrapper
        condition={!!(label && subText)}
        element="div"
        class="checkbox-wrapper"
    >
        <input type="checkbox" checked={checked} disabled={disabled} />
        <span class="check">
            {@html check}
        </span>
        {#if label}
            <span class="label">
                {@html label}
            </span>
        {/if}
    </ConditionalWrapper>
    {#if label && subText}
        <span class="sub-text">{subText}</span>
    {/if}
</label>
