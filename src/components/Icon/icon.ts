export type IconProps = {
    type: 'alert'
        | 'check'
        | 'chevron-down'
        | 'chevron-left'
        | 'chevron-right'
        | 'chevron-up'
        | 'circle-check'
        | 'circle-close'
        | 'close'
        | 'components'
        | 'copy'
        | 'file'
        | 'github'
        | 'home'
        | 'info'
        | 'moon'
        | 'order'
        | 'search'
        | 'sun'
        | 'warning'
        | string
    size?: number
    color?: string
    theme?: 'info' | 'success' | 'warning' | 'alert',
    iconSet?: {
        [key: string]: string
    }
}
