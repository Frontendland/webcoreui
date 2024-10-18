export type AccordionProps = {
    items: {
        title: string
        content: string
        reverse?: boolean
    }[]
    icon?: 'plus' | 'none' | undefined | null
    reverse?: boolean
    className?: string
}
