<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLAttributes } from 'svelte/elements'
    import type { AlertProps } from './alert'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import alert from '../../icons/alert.svg?raw'
    import success from '../../icons/circle-check.svg?raw'
    import info from '../../icons/info.svg?raw'
    import warning from '../../icons/warning.svg?raw'

    import styles from './alert.module.scss'

    export type SvelteAlertProps = {
        icon?: Snippet
        children: Snippet
    } & AlertProps<HTMLAttributes<HTMLElement>>

    const {
        element = 'section',
        title,
        titleTag = 'strong',
        titleProps,
        bodyProps,
        className,
        theme,
        icon,
        children,
        ...rest
    }: SvelteAlertProps = $props()

    const iconMap = {
        info,
        success,
        warning,
        alert
    }

    const hasCustomIcon = $derived(icon)

    const classes = $derived([
        styles['w-alert'],
        (!hasCustomIcon && !theme) && styles.col,
        theme && styles[theme],
        className
    ].filter(Boolean).join(' '))
</script>

<svelte:element this={element} class={classes} {...rest}>
    {@render icon?.()}

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
            {@render children?.()}
        </div>
    </ConditionalWrapper>
</svelte:element>
