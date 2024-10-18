import type {
    AccordionProps
} from 'webcoreui/astro'

export type FAQProps = {
    element?: string
    title?: string
    titleTag?: string
    items: AccordionProps['items']
    className?: string
}

export type ReactFAQProps = {
    children?: React.ReactNode
} & FAQProps
