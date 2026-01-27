<script lang="ts">
    import {
        Card,
        Input
    } from 'webcoreui/svelte'

    import Button from '@blocks/Button/Button.svelte'

    import type { SvelteSignUpProps } from './signup'

    const {
        label = 'Sign up',
        emailLabel = 'Email',
        emailPlaceholder = 'Enter your email',
        emailSubText = '',
        passwordLabel = 'Password',
        passwordPlaceholder = 'Enter your password',
        passwordSubText = 'Generate a unique password <a href="#">here</a>',
        primaryButtonTheme = 'success',
        primaryButtonLabel = 'Create an account',
        secondaryButtonTheme = 'secondary',
        secondaryButtonLabel = 'Sign in',
        primaryOnClick,
        secondaryOnClick
    }: SvelteSignUpProps = $props()
</script>

<Card title={label}>
    <form class="flex column" onsubmit={e => e.preventDefault()}>
        <Input
            label={emailLabel}
            placeholder={emailPlaceholder}
            subText={emailSubText}
            autocomplete="on"
        />
        <Input
            type="password"
            label={passwordLabel}
            placeholder={passwordPlaceholder}
            subText={passwordSubText}
            autocomplete="on"
        />
        <div class="flex xs wrap">
            {#if primaryButtonLabel}
                <Button
                    theme={primaryButtonTheme}
                    onClick={primaryOnClick}
                    text={primaryButtonLabel}
                />
            {/if}
            {#if secondaryButtonLabel}
                <Button
                    theme={secondaryButtonTheme}
                    onClick={secondaryOnClick}
                    text={secondaryButtonLabel}
                />
            {/if}
        </div>
    </form>
</Card>
