/* eslint-disable complexity */
import React from 'react'
import type { PortfolioProps } from './portfolio'

import BlogCard from '@blocks/BlogCard/BlogCard.tsx'
import Button from '@blocks/Button/Button.tsx'
import GridWithIcons from '@blocks/GridWithIcons/GridWithIcons.tsx'
import Hero from '@blocks/Hero/Hero.tsx'
import IconList from '@blocks/IconList/IconList.tsx'
import Layout from '@blocks/Layout/Layout.tsx'

import styles from './portfolio.module.scss'

import { classNames } from 'webcoreui'
import { ConditionalWrapper, Rating } from 'webcoreui/react'

const Portfolio = ({
    layout,
    hero,
    aboutMe,
    ratings,
    ratingCta,
    myWork,
    servicesTitle,
    services,
    servicesCta,
    ...rest
}: PortfolioProps) => (
    <Layout {...layout} {...rest} containerClassName="container flex column">
        {hero && <Hero {...hero} />}

        <section>
            <h2 className={styles.title}>{aboutMe.title || 'About Me'}</h2>
            <ConditionalWrapper
                condition={!!(aboutMe.img?.src || aboutMe.services?.length)}
                wrapper={children => <div className="flex column md-row">{children}</div>}
            >
                {aboutMe.img?.src && (
                    <img
                        src={aboutMe.img.src}
                        alt={aboutMe.img.alt}
                        width={aboutMe.img.width}
                        height={aboutMe.img.height}
                        className={styles.img}
                    />
                )}
                <ConditionalWrapper
                    condition={!!(aboutMe.text && aboutMe.services?.length)}
                    wrapper={children => <div className="flex column">{children}</div>}
                >
                    <div
                        className={styles.about}
                        dangerouslySetInnerHTML={{ __html: aboutMe.text }}
                    />
                    {aboutMe.services?.length && (
                        <IconList items={aboutMe.services} columns={2} />
                    )}
                </ConditionalWrapper>
            </ConditionalWrapper>

            {ratings?.length && (
                <ul className={classNames([styles.ratings, 'grid sm-3 items-start'])}>
                    {ratings.map((rating, index) => (
                        <li className="grid xs" key={index}>
                            <Rating {...(({ feedback, ...rest }) => rest)(rating)} />
                            <span
                                className="muted"
                                dangerouslySetInnerHTML={{ __html: rating.feedback }}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </section>

        {ratingCta?.text && (
            <Button {...ratingCta} className={styles.cta} />
        )}

        {myWork?.items?.length && (
            <section>
                <h2 className={styles.title}>{myWork.title || 'My Work'}</h2>
                <div className="grid sm-2 md-3">
                    {myWork.items.map((item, index) => (
                        <BlogCard {...item} key={index} />
                    ))}
                </div>
            </section>
        )}

        {services?.items?.length && (
            <section>
                <h2 className={styles.title}>{servicesTitle || 'Services'}</h2>
                <GridWithIcons {...services} />
            </section>
        )}

        {servicesCta?.text && (
            <Button {...servicesCta} className={styles.cta} />
        )}
    </Layout>
)

export default Portfolio
