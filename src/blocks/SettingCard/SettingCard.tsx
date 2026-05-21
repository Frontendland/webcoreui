import React from 'react'
import { Card } from 'webcoreui/react'

import type { SettingCardProps } from './settingCard'
import styles from './setting-card.module.scss'

export type Props = SettingCardProps & {
    children: React.ReactNode
    additionalContent?: React.ReactNode
}

const SettingCard = ({
    title,
    subTitle,
    children,
    additionalContent,
    ...rest
}: Props) => {

    return (
        <Card
            secondary={true}
            className={styles.card}
            bodyClassName="flex column sm"
            {...rest}
        >
            <div className="flex justify-between items-center xs">
                <div className="flex column xxs">
                    <div>{title}</div>
                    {subTitle && <div className="muted">{subTitle}</div>}
                </div>
                {children}
            </div>
            {additionalContent}
        </Card>
    )
}

export default SettingCard
