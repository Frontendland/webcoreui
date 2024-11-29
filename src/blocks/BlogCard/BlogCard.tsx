import React from 'react'
import { classNames } from 'webcoreui'
import {
    Card,
    ConditionalWrapper
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
                <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading={img.lazy ? 'lazy' : undefined}
                />
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
