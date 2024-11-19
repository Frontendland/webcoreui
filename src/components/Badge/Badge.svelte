<script lang="ts">
    import type { SvelteBadgeProps } from './badge'

    import { classNames } from '../../utils/classNames'

    import styles from './badge.module.scss'

    export let theme: SvelteBadgeProps['theme'] = null
    export let hover: SvelteBadgeProps['hover'] = false
    export let small: SvelteBadgeProps['small'] = false
    export let rounded: SvelteBadgeProps['rounded'] = false
    export let className: SvelteBadgeProps['className'] = ''
    export let onClick: SvelteBadgeProps['onClick'] = null

    const classes = classNames([
        styles.badge,
        theme && styles[theme],
        (onClick || hover) && styles.hover,
        small && styles.small,
        rounded && styles.round,
        className
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

