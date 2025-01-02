import React from 'react'
import { classNames } from 'webcoreui'
import {
    Badge,
    Button,
    ConditionalWrapper
} from 'webcoreui/react'

import type { HeroProps } from './hero'
import styles from './hero.module.scss'

const Hero = ({
    heading,
    subHeading,
    buttons,
    badge,
    image,
    reverse,
    className
}: HeroProps) => {
    const classes = classNames([
        styles.hero,
        reverse && styles.reverse,
        image?.src && styles.flex,
        className
    ])

    return (
        <section className={classes}>
            <ConditionalWrapper condition={!!image?.src} wrapper={children => <div>{children}</div>}>
                {badge && (
                    <Badge {...badge} className={styles.badge}>
                        {badge.text}
                    </Badge>
                )}
                <h1>{heading}</h1>
                {subHeading && <h2>{subHeading}</h2>}

                {!!buttons?.length && (
                    <div className={classNames([styles.cta, 'flex xs wrap'])}>
                        {buttons?.map((button, index) => (
                            <Button
                                {...button}
                                key={index}
                                icon={null}
                                dangerouslySetInnerHTML={{ __html: button.icon
                                    ? `${button.icon} ${button.text}`
                                    : button.text
                                }}
                            />
                        ))}
                    </div>
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
