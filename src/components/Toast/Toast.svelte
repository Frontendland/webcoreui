<script lang="ts">
    import type { ToastProps } from './toast'

    import Alert from '../Alert/Alert.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './toast.module.scss'

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

{#if $$slots.icon}
    <Alert {...$$restProps} className={classes} {...additionalProps}>
        <slot slot="icon" name="icon" />
        <slot />
    </Alert>
{:else}
    <Alert {...$$restProps} className={classes} {...additionalProps}>
        <slot />
    </Alert>
{/if}

