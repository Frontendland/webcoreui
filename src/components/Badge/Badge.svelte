<script lang="ts">
    import type { BadgeProps } from './badge'
    import styles from './badge.module.scss'
    
    export let theme: BadgeProps['theme'] = null
    export let onClick: BadgeProps['onClick'] = null

    const classes = [
        styles.badge,
        theme && styles[theme],
        onClick && styles.hover
    ].filter(Boolean).join(' ')
</script>

<span class={classes} on:click={onClick} {...$$restProps}>
    <slot />
</span>
