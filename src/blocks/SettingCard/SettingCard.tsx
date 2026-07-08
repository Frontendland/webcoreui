import React from 'react'
import { classNames } from 'webcoreui'
import { Card, ConditionalWrapper } from 'webcoreui/react'

import type { SettingCardProps } from './settingCard'
import styles from './setting-card.module.scss'

export type Props = SettingCardProps & {
    children: React.ReactNode
    additionalContent?: React.ReactNode
}

const SettingCard = ({
    icon,
    title,
    subTitle,
    children,
    additionalContent,
    ...rest
}: Props) => {

    return (
        <Card
            secondary={true}
            flat={true}
            bodyClassName="flex column sm"
            {...rest}
        >
            <div className={classNames([
                styles.body,
                'flex justify-between items-center xs'
            ])}>
                <ConditionalWrapper
                    condition={!!icon}
                    wrapper={children => <div className="flex center">{children}</div>}
                >
                    {icon && (
                        <span
                            dangerouslySetInnerHTML={{ __html: icon }}
                            style={{ height: '21px' }}
                        />
                    )}

                    <div className="flex column xxs">
                        <div>{title}</div>
                        {subTitle && <div className="muted">{subTitle}</div>}
                    </div>
                </ConditionalWrapper>

                {children}
            </div>
            {additionalContent}
        </Card>
    )
}

export default SettingCard
