<script lang="ts">
    import { onMount } from 'svelte'
    import type { AuthenticationProps } from './authentication'

    import Form from '@blocks/Form/Form.svelte'
    import Layout from '@blocks/Layout/Layout.svelte'

    import styles from './authentication.module.scss'

    import type { FormField } from '@blocks/Form/form'
    import { useForm } from '@blocks/Form/useForm'
    import { classNames } from 'webcoreui'
    import { ConditionalWrapper, Tabs } from 'webcoreui/svelte'

    const {
        layout,
        banner,
        type = 'signup',
        loginForm,
        signUpForm,
        tabs,
        reverse,
        className,
        ...rest
    }: AuthenticationProps = $props()

    const defaultLoginFormFields: FormField[] = [
        { type: 'email', label: 'Email', name: 'email' },
        { type: 'password', label: 'Password', name: 'password', autoComplete: true },
        { type: 'button', label: 'Login' }
    ]

    const defaultSignUpFormFields: FormField[] = [
        { type: 'email', label: 'Email', name: 'email' },
        { type: 'password', label: 'Password', name: 'password', autoComplete: true },
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

    onMount(() => {
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
    })
</script>

{#snippet forms()}
    <ConditionalWrapper
        condition={useTabs}
        data-tab="signup"
        data-active={type === 'signup'}
    >
        {#if (type === 'signup' || useTabs)}
            <Form {...signUpProps} />
        {/if}
    </ConditionalWrapper>

    <ConditionalWrapper
        condition={useTabs}
        data-tab="login"
        data-active={type === 'login'}
    >
        {#if (type === 'login' || useTabs)}
            <Form {...loginProps} />
        {/if}
    </ConditionalWrapper>
{/snippet}

<Layout
    {...layout}
    {...rest}
    class={styles.body}
    containerClassName={layoutClasses}
>
    {#if useTabs}
        <Tabs {...tabs} className={styles.tabs}>
            {@render forms()}
        </Tabs>
    {:else}
        {@render forms()}
    {/if}

    {#if banner?.src}
        <img
            src={banner.src}
            alt={banner.alt}
            width={banner.width}
            height={banner.height}
            class={styles.banner}
        />
    {/if}
</Layout>
