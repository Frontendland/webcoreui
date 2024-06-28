<script lang="ts">
    import type { RadioProps } from './radio'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import styles from './radio.module.scss'

    export let name: RadioProps['name'] = ''
    export let items: RadioProps['items'] = []
    export let color: RadioProps['color'] =  ''
    export let inline: RadioProps['inline'] = false
    export let className: RadioProps['className'] = ''
    export let onChange: () => any = () => {}

    const classes = [
        styles.radio,
        inline && styles.inline,
        className
    ].filter(Boolean).join(' ')

    const style = color
        ? `--w-radio-color: ${color};`
        : null
</script>

<div class={classes} style={style}>
    {#each items as item}
        <label class={[
            item.subText && styles.col,
            item.disabled && styles.disabled
        ].filter(Boolean).join(' ')}
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
                />
                <span class={styles.icon} />
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
