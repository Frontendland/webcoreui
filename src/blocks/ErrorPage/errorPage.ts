import type { ButtonBlockProps } from '@blocks/Button/button'

export type ErrorPageProps = {
    type: number
    typeColor?: string
    title: string
    subTitle?: string
    buttons?: ButtonBlockProps[]
    [key: string]: any
}
