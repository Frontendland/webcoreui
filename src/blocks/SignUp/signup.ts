import type { MouseEventHandler } from 'svelte/elements'

import type { ButtonProps } from 'webcoreui/astro'

export type SignUpProps = {
    label?: string
    emailLabel?: string
    emailPlaceholder?: string
    emailSubText?: string
    passwordLabel?: string
    passwordPlaceholder?: string
    passwordSubText?: string
    primaryButtonTheme?: ButtonProps['theme']
    primaryButtonLabel?: string
    secondaryButtonTheme?: ButtonProps['theme']
    secondaryButtonLabel?: string
}

export type SvelteSignUpProps = {
    primaryOnClick?: MouseEventHandler<HTMLButtonElement>
    secondaryOnClick?: MouseEventHandler<HTMLButtonElement>
} & SignUpProps

export type ReactSignUpProps = {
    primaryOnClick?: React.MouseEventHandler<HTMLButtonElement>
    secondaryOnClick?: React.MouseEventHandler<HTMLButtonElement>
} & SignUpProps
