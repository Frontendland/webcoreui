import type {
    AccordionProps
} from 'webcoreui/astro'

export type FAQProps = {
    element?: string
    title?: string
    titleTag?: string
    items: AccordionProps['items']
    icon?: AccordionProps['icon']
    reverse?: AccordionProps['reverse']
    className?: string
} & AccordionProps

