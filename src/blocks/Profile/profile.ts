import { type BadgeProps } from 'webcoreui/astro'

export type Task = {
    theme: BadgeProps['theme']
    label: string
    ticket: string
}
