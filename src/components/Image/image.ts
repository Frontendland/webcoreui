export type ImageProps<T extends object = object> = {
    src: string
    alt: string
    width: number | string
    height: number | string
    lazy?: boolean
    ratio?: string
    center?: boolean
    full?: 'width' | 'height' | 'both'
    rounded?: 'top' | 'bottom' | 'left' | 'right' | 'diagonal' | 'reverse-diagonal' | 'none'
    className?: string
} & T
