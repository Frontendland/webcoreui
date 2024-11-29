import React from 'react'
import { classNames } from 'webcoreui'
import {
    Avatar,
    Card,
    Rating,
    Spinner
} from 'webcoreui/react'

import styles from './seller.module.scss'

const avatarGroup = [
    '/img/avatar0.png',
    '/img/avatar1.png',
    '/img/avatar2.png',
    '/img/avatar3.png',
    '/img/avatar4.png'
]

const Seller = () => {

    return (
        <Card>
            <div className="flex sm items-center">
                <Avatar
                    img="/img/avatar0.png"
                    size={50}
                />
                <div className="flex column xs">
                    <span>Marcus</span>
                    <span className="muted" data-tooltip="In Art & Collectibles">
                        Top rated seller
                    </span>
                </div>
            </div>
            <hr />
            <Rating
                score={4.8}
                showText={true}
                reviewCount={123}
                reviewLink="#"
                reviewTarget="_blank"
            />
            <div className={classNames(['flex center sm', styles.loading])}>
                <Spinner />
                <span className="muted">
                    Loading reviews...
                </span>
            </div>
            <hr />
            <div className={styles.sellers}>
                <strong>Explore other sellers</strong>
                <a href="#">
                    <Avatar
                        size={[30, 40, 50, 40, 30]}
                        img={avatarGroup}
                        alt={avatarGroup}
                    />
                </a>
            </div>
        </Card>
    )
}

export default Seller
