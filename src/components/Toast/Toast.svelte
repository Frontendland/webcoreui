<script lang="ts">
    import type { SvelteToastProps } from './toast'

    import Alert from '../Alert/Alert.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './toast.module.scss'

    const {
        position,
        className,
        icon,
        children,
        ...rest
    }: SvelteToastProps = $props()

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
