export type IconProps = {
    type: 'alert'
        | 'arrow-down'
        | 'arrow-left'
        | 'arrow-right'
        | 'check'
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
