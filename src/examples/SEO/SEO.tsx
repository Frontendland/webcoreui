import React from 'react'

import styles from './seo.module.scss'

import { classNames } from 'webcoreui'
import {
    Card,
    Progress
} from 'webcoreui/react'

const progressClass = classNames([
    'flex justify-between muted',
    styles['progress-label']
])

const SEO = () => {

    return (
        <Card title="SEO Overview">
            <span>Keep track of the SEO performance of your posts.</span>

            <div className={classNames(['flex column md', styles.my])}>
                <div>
                    <div className={progressClass}>
                        <span>Underperforming</span>
                        <span>50%</span>
                    </div>
                    <Progress value={50} color="var(--w-color-alert)" />
                </div>
                <div>
                    <div className={progressClass}>
                        <span>OK</span>
                        <span>30%</span>
                    </div>
                    <Progress value={30} color="var(--w-color-warning)" />
                </div>
                <div>
                    <div className={progressClass}>
                        <span>SEO-friendly</span>
                        <span>20%</span>
                    </div>
                    <Progress value={20} color="var(--w-color-success)" />
                </div>
            </div>
        </Card>
    )
}

export default SEO
