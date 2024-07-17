<script lang="ts">
    import type { ToastProps } from './toast'
    import Alert from '../Alert/Alert.svelte'

    import styles from './toast.module.scss'
    import { classNames } from '../../utils/classNames'

    export let position: ToastProps['position'] = null
    export let className: ToastProps['className'] = ''

    const classes = classNames([
        styles.toast,
        className
    ])

    const additionalProps = {
        ...(position && { 'data-position': position }),
        titleProps: {
            'data-id': 'title'
        },
        bodyProps: {
            'data-id': 'body'
        }
    }
</script>

<Alert {...$$restProps} className={classes} {...additionalProps}>
    {#if $$slots.icon}
        <slot name="icon" />
    {/if}
    <slot />
</Alert>
