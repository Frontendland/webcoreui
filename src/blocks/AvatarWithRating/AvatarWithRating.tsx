import React from 'react'
import { classNames } from 'webcoreui'
import { Avatar, Rating } from 'webcoreui/react'

import type { AvatarWithRatingProps } from './avatarWithRating'
import styles from './avatar-with-rating.module.scss'

const AvatarWithRating = ({
    avatar,
    rating,
    text,
    reverse,
    className
}: AvatarWithRatingProps) => {
    const classes = classNames([
        'flex sm items-center',
        styles.avatar,
        className
    ])

    return (
        <div className={classes}>
            <Avatar {...avatar} />
            <div className={classNames(['flex xxs', reverse ? 'column-reverse' : 'column'])}>
                <Rating {...rating} className={styles.rating} />
                {text && (
                    <span
                        className="muted"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                )}
            </div>
        </div>
    )
}

export default AvatarWithRating
