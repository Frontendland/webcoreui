<script lang="ts">
    import type { SvelteButtonProps } from './button'

    import styles from './button.module.scss'
    import { classNames } from '../../utils/classNames'

    export let theme: SvelteButtonProps['theme'] = null
    export let href: SvelteButtonProps['href'] = ''
    export let className: SvelteButtonProps['className'] = ''
    export let onClick: SvelteButtonProps['onClick'] = () => {}

    const classes = classNames([
        styles.button,
        theme && styles[theme],
        className
    ])
</script>


{#if href}
    <a {...$$restProps} href={href} class={classes || null}>
        <slot />
    </a>
{:else}
    <button {...$$restProps} class={classes || null} on:click={onClick}>
        <slot />
    </button>
{/if}
