<script lang="ts">
    import type { ButtonProps } from './button'
    import styles from './button.module.scss'

    export let theme: ButtonProps['theme'] = null
    export let bold: ButtonProps['bold'] = false
    export let href: ButtonProps['href'] = ''
    export let onClick: ButtonProps['onClick'] = () => {}

    const classes = [
        styles.button,
        bold && styles.bold,
        theme && styles[theme]
    ].filter(Boolean).join(' ')
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
