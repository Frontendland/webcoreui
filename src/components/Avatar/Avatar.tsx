import React from 'react'
import type { AvatarProps } from './avatar'

import Image from '../Image/Image.tsx'

import { classNames } from '../../utils/classNames'

import styles from './avatar.module.scss'

const Avatar = ({
    img,
    alt = 'Avatar',
    size = 40,
    lazy = true,
    borderColor,
    borderless,
    reverse,
    className,
    groupClassName
}: AvatarProps) => {
    const classes = classNames([
        styles.avatar,
        borderless && styles.borderless,
        className
    ])

    const groupStyles = classNames([
        styles.group,
        reverse && styles.reverse,
        groupClassName
    ])

    const borderColorStyle = borderColor
        ? { '--w-avatar-border': borderColor } as React.CSSProperties
        : undefined

    return Array.isArray(img) ? (
        <div className={groupStyles}
            style={borderColorStyle}
        >
            {img.map((img, index) => (
                <Image
                    key={index}
                    src={img}
                    alt={Array.isArray(alt) ? alt[index] : alt}
                    width={Array.isArray(size) ? size[index] : size}
                    height={Array.isArray(size) ? size[index] : size}
                    loading={lazy ? 'lazy' : undefined}
                    className={classes}
                    style={Array.isArray(size)
                        ? { '--w-avatar-index': size[index] } as React.CSSProperties
                        : undefined
                    }
                />
            ))}
        </div>
    ) : (
        <Image
            src={img}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(size) ? size[0] : size}
            height={Array.isArray(size) ? size[0] : size}
            className={classes}
            loading={lazy ? 'lazy' : undefined}
            style={borderColorStyle}
        />
    )
}

export default Avatar
