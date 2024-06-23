<script lang="ts">
    import type { ToastProps } from './toast'
    import Alert from '../Alert/Alert.svelte'
    import './toast.scss'

    export let position: ToastProps['position'] = ''
    export let className: ToastProps['className'] = ''

    const classes = [
        'w-toast',
        position,
        className
    ].filter(Boolean).join(' ')
</script>

<Alert {...$$restProps} className={classes}>
    {#if $$slots.icon}
        <slot name="icon" />
    {/if}
    <slot />
</Alert>
