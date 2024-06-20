<script lang="ts">
    import type { SwitchProps } from './switch'
    import './switch.scss'
    
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
    
    const classes = [
        'w-switch',
        reverse && 'reverse',
        small && 'small',
        square && 'square',
        disabled && 'disabled',
        className
    ].filter(Boolean).join(' ')
    
    const styles = [
        offColor && `--w-switch-off-color: ${offColor};`,
        onColor && `--w-switch-on-color: ${onColor};`
    ].filter(Boolean).join(' ')
</script>

<label class={classes} style={styles || null}>
    <input
        type="checkbox"
        checked={toggled}
        disabled={disabled}
        on:click={onClick}
    />
    <span class="toggle"></span>
    {#if label}
        <span class="label">{label}</span>
    {/if}
</label>
