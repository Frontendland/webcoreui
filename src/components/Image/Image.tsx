import React from 'react'
import type { ImageProps } from './image'

import AspectRatio from '../AspectRatio/AspectRatio.tsx'
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.tsx'

import { classNames } from '../../utils/classNames'

import styles from './image.module.scss'

const Image = ({
    src,
    alt,
    width,
    height,
    lazy,
    ratio,
    center,
    full,
    rounded,
    className,
    ...rest
}: ImageProps) => {
    const classes = classNames([
        styles.img,
        center && styles.center,
        full && styles[full],
        rounded && styles[rounded],
        className
    ])

    return (
        <ConditionalWrapper
            condition={!!ratio}
            wrapper={children => (
                <AspectRatio ratio={ratio || ''}>{children}</AspectRatio>
            )}
        >
            <img
                {...rest}
                src={src}
                alt={alt || ''}
                width={width}
                height={height}
                loading={lazy ? 'lazy' : undefined}
                className={classes}
            />
        </ConditionalWrapper>
    )
}

export default Image
