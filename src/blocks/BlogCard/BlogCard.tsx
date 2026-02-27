import React from 'react'
import { classNames } from 'webcoreui'
import {
    Card,
    ConditionalWrapper,
    Image,
    type ImageProps
} from 'webcoreui/react'

import type { BlogCardProps } from './blogCard'
import styles from './blog-card.module.scss'

const BlogCard = ({
    href,
    target,
    img,
    title,
    text,
    secondary,
    className,
    ...rest
}: BlogCardProps) => {
    return (
        <a href={href} target={target} className={classNames([styles.link, className])}>
            <Card
                {...rest}
                className={styles.card}
                bodyClassName={classNames([styles.body, secondary && styles.secondary])}
                secondary={true}
            >
                <Image {...img as ImageProps} />
                <ConditionalWrapper
                    condition={!!text}
                    wrapper={children => <div>{children}</div>}
                >
                    {title && <strong>{title}</strong>}
                    {text && <div className="muted" dangerouslySetInnerHTML={{ __html: text }} />}
                </ConditionalWrapper>
            </Card>
        </a>
    )
}

export default BlogCard
