<script lang="ts">
    import type { SvelteSwitchProps } from './switch'

    import { classNames } from '../../utils/classNames'

    import styles from './switch.module.scss'

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
        ...rest
    }: SvelteSwitchProps = $props()

    const classes = classNames([
        styles.switch,
        reverse && styles.reverse,
        small && styles.small,
        square && styles.square,
        disabled && styles.disabled,
        className
    ])

    const styleVariables = classNames([
        offColor && `--w-switch-off-color: ${offColor};`,
        onColor && `--w-switch-on-color: ${onColor};`
    ])
</script>

<label class={classes} style={styleVariables || null}>
    <input
        type="checkbox"
        checked={toggled}
        disabled={disabled}
        onclick={onClick}
        {...rest}
    />
    <span class={styles.toggle}></span>
    {#if label}
        <span class={styles.label}>{@html label}</span>
    {/if}
</label>
