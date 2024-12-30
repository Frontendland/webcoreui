<script lang="ts">
    import type { SvelteBadgeProps } from './badge'

    import { classNames } from '../../utils/classNames'

    import styles from './badge.module.scss'

    const {
        theme,
        hover,
        small,
        rounded,
        className,
        onClick,
        children,
        ...rest
    }: SvelteBadgeProps = $props()

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
    <button class={classes} onclick={onClick} {...rest}>
        {@render children?.()}
    </button>
{:else}
    <span class={classes} {...rest}>
        {@render children?.()}
    </span>
{/if}

