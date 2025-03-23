<script lang="ts">
    import type { OTPInputProps } from './otpinput'

    import Input from '../Input/Input.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './otpinput.module.scss'

    let {
        name,
        disabled,
        length = 6,
        groupLength = 0,
        separator = '•',
        label,
        subText,
        className,
        value = $bindable(''),
        ...rest
    }: OTPInputProps = $props()

    const classes = classNames([
        styles.wrapper,
        className
    ])

    const inputPlaceholders = Array.from({ length }, (_, i) => i + 1)
        .reduce<(number | string)[]>((acc, num, i) =>
            groupLength > 0 && i % groupLength === 0 && i !== 0
                ? [...acc, separator, num]
                : [...acc, num]
        , [])

    const getAdjustedIndex = (index: number) => inputPlaceholders
        .slice(0, index)
        .filter(placeholder => typeof placeholder !== 'string')
        .length
</script>

<div class={classes}>
    {#if label}
        <label for={name} class={styles.label}>{@html label}</label>
    {/if}

    <div class={styles['input-wrapper']}>
        <Input
            name={name || 'otp'}
            disabled={disabled}
            maxlength={length}
            required={true}
            bind:value
            {...rest}
        />

        <div class={styles.placeholders}>
            {#each inputPlaceholders as placeholder, index}
                <div
                    class={typeof placeholder === 'string' ? styles.separator : styles.placeholder}
                    data-active={getAdjustedIndex(index) === value.length ? true : undefined}
                >
                    {typeof placeholder === 'string' ? placeholder : value[getAdjustedIndex(index)]}
                </div>
            {/each}
        </div>
    </div>

    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</div>
