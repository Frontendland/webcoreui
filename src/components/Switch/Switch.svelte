<script lang="ts">
    import type { SvelteSwitchProps } from './switch'

    import { classNames } from '../../utils/classNames'

    import styles from './switch.module.scss'

    export let label: SvelteSwitchProps['label'] = ''
    export let toggled: SvelteSwitchProps['toggled'] = false
    export let offColor: SvelteSwitchProps['offColor'] = ''
    export let onColor: SvelteSwitchProps['onColor'] = ''
    export let reverse: SvelteSwitchProps['reverse'] = false
    export let small: SvelteSwitchProps['small'] = false
    export let square: SvelteSwitchProps['square'] = false
    export let disabled: SvelteSwitchProps['disabled'] = false
    export let className: SvelteSwitchProps['className'] = ''
    export let onClick: SvelteSwitchProps['onClick'] = () => {}

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
        on:click={onClick}
    />
    <span class={styles.toggle}></span>
    {#if label}
        <span class={styles.label}>{label}</span>
    {/if}
</label>
