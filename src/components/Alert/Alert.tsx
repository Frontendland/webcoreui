import React from 'react'
import type { ReactAlertProps } from './alert'

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import alert from '../../icons/alert.svg?raw'
import success from '../../icons/circle-check.svg?raw'
import info from '../../icons/info.svg?raw'
import warning from '../../icons/warning.svg?raw'

import styles from './alert.module.scss'

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
    titleProps,
    bodyProps,
    className,
    theme,
    children,
    icon,
    ...rest
}: ReactAlertProps) => {
    const classes = [
        styles['w-alert'],
        (!icon && !theme) && styles.col,
        theme && styles[theme],
        className
    ].filter(Boolean).join(' ')

    return (
        <Element className={classes} {...rest}>
            {icon && icon}
            {!icon && theme && <div
                dangerouslySetInnerHTML={{ __html: iconMap[theme as keyof typeof iconMap] }}
                style={{ height: '20px' }}
            />}

            <ConditionalWrapper condition={!!(icon || theme)} wrapper={children => (
                <div className={styles.wrapper}>
                    {children}
                </div>
            )}>
                {title && (
                    <TitleTag className={styles.title} {...titleProps}>
                        {title}
                    </TitleTag>
                )}
                <div className={styles.body} {...bodyProps}>
                    {children}
                </div>
            </ConditionalWrapper>
        </Element>
    )
}

export default Alert
