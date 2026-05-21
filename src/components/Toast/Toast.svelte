<script lang="ts">
    import type { ToastProps } from './toast'

    import Alert, { type Props as AlertProps } from '../Alert/Alert.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './toast.module.scss'

    export type Props = ToastProps<AlertProps>

    const {
        position,
        className,
        icon,
        children,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        styles.toast,
        className
    ]))

    const additionalProps = $derived({
        ...(position && { 'data-position': position }),
        titleProps: {
            'data-id': 'title'
        },
        bodyProps: {
            'data-id': 'body'
        }
    })

    const iconRender = $derived(icon)
</script>

{#if icon}
    <Alert {...rest} className={classes} {...additionalProps}>
        {#snippet icon()}
            {@render iconRender?.()}
        {/snippet}
        {@render children?.()}
    </Alert>
{:else}
    <Alert {...rest} className={classes} {...additionalProps}>
        {@render children?.()}
    </Alert>
{/if}
