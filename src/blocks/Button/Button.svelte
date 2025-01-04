<script lang="ts">
    import { classNames } from 'webcoreui'
    import {
        Badge,
        Button as WebcoreButton
    } from 'webcoreui/svelte'

    import type { ButtonProps } from './button'
    import styles from './button.module.scss'

    const {
        icon,
        text,
        badge,
        className,
        ...rest
    }: ButtonProps = $props()

    const SvelteComponent = $derived(badge ? Badge : WebcoreButton)
</script>

<SvelteComponent
    {...rest}
    className={classNames([styles.button, className])}
>
    {#if icon}
        {@html icon}
    {/if}
    {text}
</SvelteComponent>
