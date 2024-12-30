<script lang="ts">
    import type { SvelteRadioProps } from './radio'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './radio.module.scss'

    const {
        name,
        items,
        color,
        inline,
        className,
        onChange,
        ...rest
    }: SvelteRadioProps = $props()

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
                    onchange={onChange}
                    {...rest}
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
