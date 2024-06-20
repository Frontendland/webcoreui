<script lang="ts">
    import type { RadioProps } from './radio'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import './radio.scss'

    export let name: RadioProps['name'] = ''
    export let items: RadioProps['items'] = []
    export let color: RadioProps['color'] =  ''
    export let inline: RadioProps['inline'] = false
    export let className: RadioProps['className'] = ''
    export let onChange: () => any = () => {}

    const classes = [
        'w-radio',
        inline && 'inline',
        className
    ].filter(Boolean).join(' ')

    const style = color
        ? `--w-radio-color: ${color};`
        : null
</script>

<div class={classes} style={style}>
    {#each items as item}
        <label
            class:col={item.subText}
            class:disabled={item.disabled}
        >
            <ConditionalWrapper
                condition={!!(item.subText)}
                element="div"
                class="radio-wrapper"
            >
                <input
                    type="radio"
                    name={name} 
                    checked={item.selected}
                    disabled={item.disabled}
                    on:change={onChange}
                />
                <span class="radio" />
                <span class="label">
                    {@html item.label}
                </span>
            </ConditionalWrapper>
            {#if item.subText}
                <span class="sub-text">
                    {@html item.subText}
                </span>
            {/if}
        </label>
    {/each}
</div>
