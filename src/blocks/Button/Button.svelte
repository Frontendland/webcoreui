<script lang="ts">
    import { classNames } from 'webcoreui'
    import {
        Badge,
        Button as WebcoreButton
    } from 'webcoreui/svelte'

    import type { ButtonProps } from './button'
    import styles from './button.module.scss'

    export type Props = ButtonProps

    const {
        icon,
        text,
        badge,
        className,
        ...rest
    }: Props = $props()

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
