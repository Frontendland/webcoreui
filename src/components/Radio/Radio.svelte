<script lang="ts">
    import type { SvelteRadioProps } from './radio'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './radio.module.scss'

    export let name: SvelteRadioProps['name'] = ''
    export let items: SvelteRadioProps['items'] = []
    export let color: SvelteRadioProps['color'] = ''
    export let inline: SvelteRadioProps['inline'] = false
    export let className: SvelteRadioProps['className'] = ''
    export let onChange: SvelteRadioProps['onChange'] = () => {}

    const classes = classNames([
        styles.radio,
        inline && styles.inline,
        className
    ])

    const style = color
        ? `--w-radio-color: ${color};`
        : null
</script>

<div class={classes} style={style}>
    {#each items as item}
        <label class={classNames([
            item.subText && styles.col,
            item.disabled && styles.disabled
        ])}
        >
            <ConditionalWrapper
                condition={!!(item.subText)}
                element="div"
                class={styles.wrapper}
            >
                <input
                    type="radio"
                    name={name}
                    value={item.value}
                    checked={item.selected}
                    disabled={item.disabled}
                    on:change={onChange}
                    {...$$restProps}
                />
                <span class={styles.icon}></span>
                <span class={styles.label}>
                    {@html item.label}
                </span>
            </ConditionalWrapper>
            {#if item.subText}
                <span class={styles.subtext}>
                    {@html item.subText}
                </span>
            {/if}
        </label>
    {/each}
</div>
