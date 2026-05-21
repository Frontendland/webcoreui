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

