import React from 'react'
import type { AvatarProps } from './avatar'

import styles from './avatar.module.scss'
import { classNames } from '../../utils/classNames'

const Avatar = ({
    img,
    alt = 'Avatar',
    size = 40,
    lazy = true,
    borderColor,
    borderless,
    reverse,
    className,
}: AvatarProps) => {
    const classes = classNames([
        styles.avatar,
        borderless && styles.borderless,
        className
    ])

    const groupStyles = classNames([
        styles.group,
        reverse && styles.reverse
    ])

    const borderColorStyle = borderColor
        ? { '--w-avatar-border': borderColor } as React.CSSProperties
        : undefined

    return Array.isArray(img) ? (
        <div className={groupStyles}
            style={borderColorStyle}
        >
            {img.map((img, index) => (
                <img
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
        <img
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
