<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { MouseEventHandler } from 'svelte/elements'
    import type { BadgeProps } from './badge'

    import { classNames } from '../../utils/classNames'

    import styles from './badge.module.scss'

    export type SvelteBadgeProps = {
        onClick?: MouseEventHandler<HTMLButtonElement> | null
        children?: Snippet
    } & BadgeProps

    const {
        theme,
        hover,
        small,
        rounded,
        transparent,
        className,
        onClick,
        children,
        ...rest
    }: SvelteBadgeProps = $props()

    const classes = $derived(classNames([
        styles.badge,
        theme && styles[theme],
        (onClick || hover) && styles.hover,
        small && styles.small,
        rounded && styles.round,
        transparent && styles.transparent,
        className
    ]))
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

