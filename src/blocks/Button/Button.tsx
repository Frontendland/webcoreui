import { classNames } from 'webcoreui'
import {
    Badge,
    Button as WebcoreButton
} from 'webcoreui/react'

import type { ButtonProps } from './button'
import styles from './button.module.scss'

export type Props = ButtonProps

type CommonProps = {
    className?: string
    dangerouslySetInnerHTML?: { __html: string }
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    [key: string]: unknown
}

const Button = ({
    icon,
    text = '',
    badge,
    className,
    ...rest
}: Props) => {
    const Component = (badge ? Badge : WebcoreButton) as React.ComponentType<CommonProps>

    return (
        <Component
            {...rest}
            className={classNames([styles.button, className])}
            dangerouslySetInnerHTML={{ __html: icon
                ? `${icon} ${text}`
                : text
            }}
        />
    )
}

export default Button
