import React, { useEffect } from 'react'
import type { AuthenticationProps } from './authentication'

import Form from '@blocks/Form/Form.tsx'
import Layout from '@blocks/Layout/Layout.tsx'

import styles from './authentication.module.scss'

import type { FormField } from '@blocks/Form/form'
import { useForm } from '@blocks/Form/useForm'
import { classNames } from 'webcoreui'
import { ConditionalWrapper, Tabs } from 'webcoreui/react'

const Authentication = ({
    layout,
    banner,
    type = 'signup',
    loginForm,
    signUpForm,
    tabs,
    reverse,
    className,
    ...rest
}: AuthenticationProps) => {
    const defaultLoginFormFields: FormField[] = [
        { type: 'email', label: 'Email', name: 'email' },
        { type: 'password', label: 'Password', name: 'password', autoComplete: 'on' },
        { type: 'button', label: 'Login' }
    ]

    const defaultSignUpFormFields: FormField[] = [
        { type: 'email', label: 'Email', name: 'email' },
        { type: 'password', label: 'Password', name: 'password', autoComplete: 'on' },
        { type: 'checkbox', label: 'I accept the <a href="#">terms and conditions</a>', name: 'terms' },
        { type: 'button', label: 'Sign Up' }
    ]

    const loginProps = {
        id: 'login-form',
        fields: defaultLoginFormFields,
        ...loginForm
    }

    const signUpProps = {
        id: 'sign-up-form',
        fields: defaultSignUpFormFields,
        ...signUpForm
    }

    const layoutClasses = classNames([
        'container flex',
        styles.layout,
        reverse && 'row-reverse',
        className
    ])

    const useTabs = !!tabs?.items?.length

    useEffect(() => {
        const loginForm = useForm('#login-form')
        const signUpForm = useForm('#sign-up-form')

        if (loginForm) {
            loginForm.preventDefault()
                .onSubmit(form => {
                    // eslint-disable-next-line no-console
                    console.log('Submitting login form with values:', form)
                })
        }

        if (signUpForm) {
            signUpForm.preventDefault()
                .onSubmit(form => {
                    // eslint-disable-next-line no-console
                    console.log('Submitting sign up form with values:', form)
                })
        }
    }, [])

    return (
        <Layout
            {...layout}
            {...rest}
            bodyClassName={styles.body}
            containerClassName={layoutClasses}
        >
            <ConditionalWrapper
                condition={useTabs}
                wrapper={children => useTabs && (
                    <Tabs {...tabs} className={styles.tabs}>
                        {children}
                    </Tabs>
                )}
            >
                <ConditionalWrapper
                    condition={useTabs}
                    wrapper={children => (
                        <div
                            data-tab="signup"
                            data-active={type === 'signup'}
                        >{children}</div>
                    )}
                >
                    {(type === 'signup' || useTabs) && (
                        <Form {...signUpProps} />
                    )}
                </ConditionalWrapper>

                <ConditionalWrapper
                    condition={useTabs}
                    wrapper={children => (
                        <div
                            data-tab="login"
                            data-active={type === 'login'}
                        >{children}</div>
                    )}
                >
                    {(type === 'login' || useTabs) && (
                        <Form {...loginProps} />
                    )}
                </ConditionalWrapper>
            </ConditionalWrapper>

            {banner?.src && (
                <img
                    src={banner.src}
                    alt={banner.alt}
                    width={banner.width}
                    height={banner.height}
                    className={styles.banner}
                />
            )}
        </Layout>
    )
}

export default Authentication
