import type { FormProps } from '@blocks/Form/form'
import type { LayoutProps } from '@blocks/Layout/layout'
import type { TabsProps } from 'webcoreui/astro'

export type AuthenticationProps = {
    layout: LayoutProps
    banner?: {
        src: string
        alt: string
        width: number
        height: number
    }
    type?: 'signup' | 'login'
    loginForm?: FormProps
    signUpForm?: FormProps
    tabs?: TabsProps
    reverse?: boolean
    className?: string
    [key: string]: any
}
