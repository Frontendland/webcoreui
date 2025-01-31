import React from 'react'
import { classNames } from 'webcoreui'
import { Avatar, Card } from 'webcoreui/react'

import Socials from '@blocks/Socials/Socials.tsx'

import type { AuthorProps } from './author'
import styles from './author.module.scss'

const Author = ({
    img,
    name,
    role,
    description,
    socials,
    bodyClassName,
    ...rest
}: AuthorProps) => {
    const classes = classNames([
        'flex sm column sm-row',
        bodyClassName
    ])

    return (
        <Card bodyClassName={classes} {...rest}>
            <div className={styles.meta}>
                <Avatar img={img.src} {...img} />
                <div className="flex column xxs">
                    <strong>{name}</strong>
                    <span className="muted">{role}</span>
                    {socials?.links?.length && <Socials {...socials} />}
                </div>
            </div>
            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </Card>
    )
}

export default Author
