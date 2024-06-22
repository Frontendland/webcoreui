<script lang="ts">
    import type { BadgeProps } from './badge'
    import './badge.scss'
    
    export let theme: BadgeProps['theme'] = null
    export let onClick: BadgeProps['onClick'] = () => {}
    
    const classes = [
        'w-badge',
        theme || null,
        onClick && 'hover'
    ].filter(Boolean).join(' ')
</script>

<span class={classes} on:click={onClick} {...$$restProps}>
    <slot />
</span>
