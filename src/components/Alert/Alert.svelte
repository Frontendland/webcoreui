<script lang="ts">
    import type { AlertProps } from './alert'
    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import info from '../../icons/info.svg?raw'
    import success from '../../icons/check.svg?raw'
    import warning from '../../icons/warning.svg?raw'
    import alert from '../../icons/alert.svg?raw'

    export let element: AlertProps['element'] = 'section'
    export let title: AlertProps['title'] = null
    export let titleTag: AlertProps['title'] = 'strong'
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
        'w-alert',
        (!hasCustomIcon && !theme) && 'col',
        theme,
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
        class="alert-wrapper"
    >
        {#if title}
            <svelte:element this={titleTag} class="alert-title">
                {title}
            </svelte:element>
        {/if}
        <div class="alert-body">
            <slot />
        </div>
    </ConditionalWrapper>
</svelte:element>

<style lang="scss">
    @import './alert.scss';
</style>
