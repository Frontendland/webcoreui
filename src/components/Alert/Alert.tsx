import React from 'react'
import type { AlertProps } from './alert'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import info from '../../icons/info.svg?raw'
import success from '../../icons/check.svg?raw'
import warning from '../../icons/warning.svg?raw'
import alert from '../../icons/alert.svg?raw'

import './alert.scss'

const iconMap = {
    info,
    success,
    warning,
    alert
}

type ReactAlertProps = {
    Element?: keyof JSX.IntrinsicElements
    TitleTag?: keyof JSX.IntrinsicElements
    children: React.ReactNode
    icon?: string
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
}: AlertProps & ReactAlertProps) => {
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
