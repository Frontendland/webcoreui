import React from 'react'
import { classNames } from 'webcoreui'
import {
    Badge,
    Button as WebcoreButton
} from 'webcoreui/react'

import type { ReactButtonProps } from './button'
import styles from './button.module.scss'

const Button = ({
    icon,
    text,
    badge,
    className,
    ...rest
}: ReactButtonProps) => {
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
