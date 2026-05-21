<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLAttributes, MouseEventHandler } from 'svelte/elements'
    import type { ButtonProps } from './button'

    import { classNames } from '../../utils/classNames'

    import styles from './button.module.scss'

    export type Props = ButtonProps<HTMLAttributes<HTMLElement>> & {
        onClick?: MouseEventHandler<HTMLButtonElement>
        children: Snippet
    }

    const {
        theme,
        href,
        className,
        onClick,
        children,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        styles.button,
        theme && styles[theme],
        className
    ]))
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
