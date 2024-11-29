import React from 'react'
import { Card } from 'webcoreui/react'

import type { ReactSettingCardProps } from './settingCard'
import styles from './setting-card.module.scss'

const SettingCard = ({
    title,
    subTitle,
    children
}: ReactSettingCardProps) => {

    return (
        <Card
            secondary={true}
            className={styles.card}
            bodyClassName={styles.body}
        >
            <div className={styles.titles}>
                <div>{title}</div>
                {subTitle && <div className="muted">{subTitle}</div>}
            </div>
            {children}
        </Card>
    )
}

export default SettingCard
