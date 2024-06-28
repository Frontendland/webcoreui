<script lang="ts">
    import type { SwitchProps } from './switch'

    import styles from './switch.module.scss'
    import { classNames } from '../../utils/classNames'
    
    export let label: SwitchProps['label'] = ''
    export let toggled: SwitchProps['toggled'] = false
    export let offColor: SwitchProps['offColor'] = ''
    export let onColor: SwitchProps['onColor'] = ''
    export let reverse: SwitchProps['reverse'] = false
    export let small: SwitchProps['small'] = false
    export let square: SwitchProps['square'] = false
    export let disabled: SwitchProps['disabled'] = false
    export let className: SwitchProps['className'] = ''
    export let onClick: () => any = () => {}
    
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
