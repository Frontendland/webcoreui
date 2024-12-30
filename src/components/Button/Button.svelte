<script lang="ts">
    import type { SvelteButtonProps } from './button'

    import { classNames } from '../../utils/classNames'

    import styles from './button.module.scss'

    const {
        theme,
        href,
        className,
        onClick,
        children,
        ...rest
    }: SvelteButtonProps = $props()

    const classes = classNames([
        styles.button,
        theme && styles[theme],
        className
    ])
</script>


{#if href}
    <a {...rest} href={href} class={classes}>
        {@render children?.()}
    </a>
{:else}
    <button {...rest} class={classes} onclick={onClick}>
        {@render children?.()}
    </button>
{/if}
