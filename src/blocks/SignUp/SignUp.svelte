<script lang="ts">
    import {
        Button,
        Card,
        Input
    } from 'webcoreui/svelte'

    import type { SvelteSignUpProps } from './signup'

    export let label: SvelteSignUpProps['label'] = 'Sign up'
    export let emailLabel: SvelteSignUpProps['emailLabel'] = 'Email'
    export let emailPlaceholder: SvelteSignUpProps['emailPlaceholder'] = 'Enter your email'
    export let emailSubText: SvelteSignUpProps['emailSubText'] = ''
    export let passwordLabel: SvelteSignUpProps['passwordLabel'] = 'Password'
    export let passwordPlaceholder: SvelteSignUpProps['passwordPlaceholder'] = 'Enter your password'
    export let passwordSubText: SvelteSignUpProps['passwordSubText'] = 'Generate a unique password <a href="#">here</a>'
    export let primaryButtonTheme: SvelteSignUpProps['primaryButtonTheme'] = 'success'
    export let primaryButtonLabel: SvelteSignUpProps['primaryButtonLabel'] = 'Create an account'
    export let secondaryButtonTheme: SvelteSignUpProps['secondaryButtonTheme'] = 'secondary'
    export let secondaryButtonLabel: SvelteSignUpProps['secondaryButtonLabel'] = 'Sign in'
    export let primaryOnClick: SvelteSignUpProps['primaryOnClick'] = () => {}
    export let secondaryOnClick: SvelteSignUpProps['secondaryOnClick'] = () => {}
</script>

<Card title={label}>
    <form class="flex column" on:submit={e => e.preventDefault()}>
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
                <Button theme={primaryButtonTheme} onClick={primaryOnClick}>
                    {primaryButtonLabel}
                </Button>
            {/if}
            {#if secondaryButtonLabel}
                <Button theme={secondaryButtonTheme} onClick={secondaryOnClick}>
                    {secondaryButtonLabel}
                </Button>
            {/if}
        </div>
    </form>
</Card>
