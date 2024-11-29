import React from 'react'
import { classNames } from 'webcoreui'

import type { SocialProofProps } from './socialProof'
import styles from './social-proof.module.scss'

const SocialProof = ({
    items,
    className
}: SocialProofProps) => {

    return (
        <section className={classNames(['flex center wrap', className])}>
            {items.map((item, index) => (
                <div className={styles.proof} key={index}>
                    <strong dangerouslySetInnerHTML={{ __html: item.text }} />
                    {item.subText && (
                        <span
                            className="muted"
                            dangerouslySetInnerHTML={{ __html: item.subText }}
                        />
                    )}
                </div>
            ))}
        </section>
    )
}

export default SocialProof
