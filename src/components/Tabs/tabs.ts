export type TabsProps = {
    items: {
        label: string
        value: string
        active?: boolean
        disabled?: boolean
    }[]
    theme?: 'boxed' | 'outline' | null
    vertical?: boolean
    even?: boolean
    className?: string
}

export type ReactTabsProps = {
    children: React.ReactNode
} & TabsProps
