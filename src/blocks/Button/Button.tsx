import { classNames } from 'webcoreui'
import {
    Badge,
    Button as WebcoreButton
} from 'webcoreui/react'

import type { ButtonProps } from './button'
import styles from './button.module.scss'

export type Props = ButtonProps

const Button = ({
    icon,
    text = '',
    badge,
    className,
    ...rest
}: Props) => {
    const Component = badge ? Badge : WebcoreButton

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
