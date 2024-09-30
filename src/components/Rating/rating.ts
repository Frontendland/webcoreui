import type { ButtonProps } from '../Button/button'

export type RatingProps = {
    score: number
    total?: number
    text?: string
    showText?: boolean
    showEmpty?: boolean
    outline?: boolean
    reviewCount?: number
    reviewText?: string
    reviewLink?: string
    reviewTarget?: ButtonProps['target']
    color?: string
    emptyColor?: string
    size?: number
    className?: string
}
