<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { RadioProps } from './radio'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './radio.module.scss'

    import type { InputTarget } from '../Input/input'

    export type SvelteRadioProps = {
        onChange?: (event: Event & InputTarget) => void
    } & RadioProps<HTMLInputAttributes>

    const {
        items,
        color,
        inline,
        className,
        onChange,
        ...rest
    }: SvelteRadioProps = $props()

    const classes = $derived(classNames([
        styles.radio,
        inline && styles.inline,
        className
    ]))

    const style = $derived(color
        ? `--w-radio-color: ${color};`
        : null
    )
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
                    {...rest}
                    type="radio"
                    value={item.value}
                    checked={item.selected}
                    disabled={item.disabled}
                    required={item.required}
                    onchange={onChange}
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
