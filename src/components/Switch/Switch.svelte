<script lang="ts">
    import type {
        ChangeEventHandler,
        HTMLInputAttributes,
        MouseEventHandler
    } from 'svelte/elements'
    import type { SwitchProps } from './switch'

    import { classNames } from '../../utils/classNames'

    import styles from './switch.module.scss'

    export type SvelteSwitchProps = {
        onChange?: ChangeEventHandler<HTMLInputElement>
        onClick?: MouseEventHandler<HTMLInputElement>
    } & SwitchProps<HTMLInputAttributes>

    const {
        label,
        toggled,
        offColor,
        onColor,
        reverse,
        small,
        square,
        disabled,
        className,
        onClick,
        onChange,
        ...rest
    }: SvelteSwitchProps = $props()

    const classes = $derived(classNames([
        styles.switch,
        reverse && styles.reverse,
        small && styles.small,
        square && styles.square,
        disabled && styles.disabled,
        className
    ]))

    const styleVariables = $derived(classNames([
        offColor && `--w-switch-off-color: ${offColor};`,
        onColor && `--w-switch-on-color: ${onColor};`
    ]))
</script>

<label class={classes} style={styleVariables || null}>
    <input
        {...rest}
        type="checkbox"
        checked={toggled}
        onclick={onClick}
        onchange={onChange}
    />
    <span class={styles.toggle}></span>
    {#if label}
        <span class={styles.label}>{@html label}</span>
    {/if}
</label>
