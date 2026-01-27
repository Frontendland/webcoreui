import React from 'react'
import {
    Card,
    Input
} from 'webcoreui/react'

import Button from '@blocks/Button/Button.tsx'

import type { ReactSignUpProps } from './signup'

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
}: ReactSignUpProps) => {

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
