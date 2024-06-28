<script lang="ts">
    import type { AlertProps } from './alert'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import info from '../../icons/info.svg?raw'
    import success from '../../icons/circle-check.svg?raw'
    import warning from '../../icons/warning.svg?raw'
    import alert from '../../icons/alert.svg?raw'

    import styles from './alert.module.scss'

    export let element: AlertProps['element'] = 'section'
    export let title: AlertProps['title'] = null
    export let titleTag: AlertProps['title'] = 'strong'
    export let titleProps: AlertProps['titleProps'] = null
    export let bodyProps: AlertProps['bodyProps'] = null
    export let className: AlertProps['className'] = null
    export let theme: AlertProps['theme'] = null

    const iconMap = {
        info,
        success,
        warning,
        alert
    }

    const hasCustomIcon = $$slots.icon

    const classes = [
        styles['w-alert'],
        (!hasCustomIcon && !theme) && styles.col,
        theme && styles[theme],
        className
    ].filter(Boolean).join(' ')
</script>

<svelte:element this={element} class={classes} {...$$restProps}>
    <slot name="icon" />

    {#if !hasCustomIcon && theme}
        {@html iconMap[theme]}
    {/if}
    
    <ConditionalWrapper
        condition={!!(hasCustomIcon || theme)}
        element="div"
        class={styles.wrapper}
    >
        {#if title}
            <svelte:element this={titleTag} class={styles.title} {...titleProps}>
                {title}
            </svelte:element>
        {/if}
        <div class={styles.body} {...bodyProps}>
            <slot />
        </div>
    </ConditionalWrapper>
</svelte:element>
