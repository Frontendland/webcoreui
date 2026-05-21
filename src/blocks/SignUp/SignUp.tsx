import {
    Card,
    Input
} from 'webcoreui/react'

import Button from '@blocks/Button/Button.tsx'

import type { SignUpProps } from './signup'

export type Props = SignUpProps & {
    primaryOnClick?: React.MouseEventHandler<HTMLButtonElement>
    secondaryOnClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SignUp = ({
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
}: Props) => {

    return (
        <Card title={label}>
            <form className="flex column" onSubmit={e => e.preventDefault()}>
                <Input
                    label={emailLabel}
                    placeholder={emailPlaceholder}
                    subText={emailSubText}
                    autoComplete="on"
                />
                <Input
                    type="password"
                    label={passwordLabel}
                    placeholder={passwordPlaceholder}
                    subText={passwordSubText}
                    autoComplete="on"
                />
                <div className="flex xs wrap">
                    {primaryButtonLabel && (
                        <Button
                            theme={primaryButtonTheme}
                            onClick={primaryOnClick}
                            text={primaryButtonLabel}
                        />
                    )}
                    {secondaryButtonLabel && (
                        <Button
                            theme={secondaryButtonTheme}
                            onClick={secondaryOnClick}
                            text={secondaryButtonLabel}
                        />
                    )}
                </div>
            </form>
        </Card>
    )
}

export default SignUp
