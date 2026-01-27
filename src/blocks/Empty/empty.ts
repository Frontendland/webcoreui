import type { IconProps } from 'webcoreui/astro'

import type { ButtonBlockProps } from '@blocks/Button/button'

export type EmptyProps = {
    icon?: IconProps['type'] | string
    iconWithBackground?: boolean
    title: string
    text: string
    buttons?: ButtonBlockProps[]
    className?: string
}
