export type ThemeSwitcherProps = {
    themes: {
        [key: string]: string
    }
    toggle?: boolean
    size?: number
    className?: string
}

export type ReactThemeSwitcherProps = {
    primaryIcon?: React.ReactNode
    secondaryIcon?: React.ReactNode
} & ThemeSwitcherProps
