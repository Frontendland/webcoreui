<script lang="ts">
    import type { SvelteBadgeProps } from './badge'

    import styles from './badge.module.scss'
    import { classNames } from '../../utils/classNames'
    
    export let theme: SvelteBadgeProps['theme'] = null
    export let onClick: SvelteBadgeProps['onClick'] = null
    export let hover: SvelteBadgeProps['hover'] = false

    const classes = classNames([
        styles.badge,
        theme && styles[theme],
        (onClick || hover) && styles.hover
    ])
</script>

{#if onClick}
    <button class={classes} on:click={onClick} {...$$restProps}>
        <slot />
    </button>
{:else}
    <span class={classes} {...$$restProps}>
        <slot />
    </span>
{/if}

