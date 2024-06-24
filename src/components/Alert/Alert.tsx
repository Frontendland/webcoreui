import React from 'react'
import type { ReactAlertProps } from './alert'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import info from '../../icons/info.svg?raw'
import success from '../../icons/circle-check.svg?raw'
import warning from '../../icons/warning.svg?raw'
import alert from '../../icons/alert.svg?raw'

import './alert.scss'

const iconMap = {
    info,
    success,
    warning,
    alert
}

const Alert = ({
    Element = 'section',
    title,
    TitleTag = 'strong',
    className,
    theme,
    children,
    icon,
    ...rest
}: ReactAlertProps) => {
    const classes = [
        'w-alert',
        (!icon && !theme) && 'col',
        theme,
        className
    ].filter(Boolean).join(' ')

    return (
        <Element className={classes} {...rest}>
            {icon && icon}
            {!icon && theme && <div dangerouslySetInnerHTML={{ __html: iconMap[theme] }} />}

            <ConditionalWrapper condition={!!(icon || theme)} wrapper={children => (
                <div className="alert-wrapper">
                    {children}
                </div>
            )}>
                {title && (
                    <TitleTag className="alert-title">{title}</TitleTag>
                )}
                <div className="alert-body">
                    {children}
                </div>
            </ConditionalWrapper>
        </Element>
    )
}

export default Alert
