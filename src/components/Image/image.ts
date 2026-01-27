export type ImageProps = {
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
    [key: string]: any
}
