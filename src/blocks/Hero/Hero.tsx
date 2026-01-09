import React from 'react'
import { classNames } from 'webcoreui'
import { ConditionalWrapper } from 'webcoreui/react'

import AvatarWithRating from '@blocks/AvatarWithRating/AvatarWithRating.tsx'
import Button from '@blocks/Button/Button.tsx'

import type { HeroProps } from './hero'
import styles from './hero.module.scss'

const Hero = ({
    badge,
    heading,
    subHeading,
    buttons,
    avatarWithRating,
    image,
    reverse,
    className
}: HeroProps) => {
    const classes = classNames([
        styles.hero,
        image?.src && 'flex column justify-between sm-row sm-items-center',
        reverse && 'sm-row-reverse',
        className
    ])

    return (
        <section className={classes}>
            <ConditionalWrapper
                condition={!!image?.src}
                wrapper={children => <div className={styles.wrapper}>{children}</div>}
            >
                {badge && (
                    <Button {...badge} badge={true} className={styles.badge} />
                )}
                <h1>{heading}</h1>
                {subHeading && <h2>{subHeading}</h2>}

                {!!buttons?.length && (
                    <div className={classNames([styles.cta, 'flex xs wrap'])}>
                        {buttons?.map((button, index) => (
                            <Button {...button} key={index} />
                        ))}
                    </div>
                )}

                {avatarWithRating && (
                    <AvatarWithRating
                        {...avatarWithRating}
                        className={styles.avatar}
                    />
                )}
            </ConditionalWrapper>

            {image?.src && (
                <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            )}
        </section>
    )
}

export default Hero
