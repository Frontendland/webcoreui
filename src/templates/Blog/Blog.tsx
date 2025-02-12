import React from 'react'
import type { ReactBlogProps } from './blog'

import Author from '@blocks/Author/Author.tsx'
import BlogCard from '@blocks/BlogCard/BlogCard.tsx'
import Hero from '@blocks/Hero/Hero.tsx'
import Layout from '@blocks/Layout/Layout.tsx'
import Tiles from '@blocks/Tiles/Tiles.tsx'

import styles from './blog.module.scss'

import { ConditionalWrapper } from 'webcoreui/react'

const Blog = ({
    layout,
    hero,
    tilesTitle = 'Explore',
    tiles,
    postsTitle = 'Latest Articles',
    posts,
    recommendedTitle = 'Recommended',
    recommended,
    authorTitle = 'About the Author',
    author,
    children,
    ...rest
}: ReactBlogProps) => {
    const ATF = () => {
        if (!hero) {
            return null
        }

        return (
            <div className={styles.hero}>
                <Hero {...hero} className={styles.container} />
            </div>
        )
    }

    return (
        <Layout
            {...layout}
            {...rest}
            className="flex column"
            atf={ATF()}
        >
            {!!tiles?.items?.length && (
                <ConditionalWrapper
                    condition={!!tilesTitle}
                    wrapper={children => <section>{children}</section>}
                >
                    {tilesTitle && (
                        <h2>{tilesTitle}</h2>
                    )}
                    <Tiles {...tiles} />
                </ConditionalWrapper>
            )}

            {!!posts?.length && (
                <ConditionalWrapper
                    condition={!!postsTitle}
                    wrapper={children => <div>{children}</div>}
                >
                    {postsTitle && (
                        <h2>{postsTitle}</h2>
                    )}
                    <div className="grid sm-2 lg-3">
                        {posts.map((post, index) => (
                            <BlogCard {...post} key={index} />
                        ))}
                    </div>
                </ConditionalWrapper>
            )}

            <ConditionalWrapper
                condition={!!recommended?.length}
                wrapper={children => (
                    <section className="flex column md-row">
                        {children}
                    </section>
                )}
            >
                {children && (
                    <section className={styles.main}>
                        {children}
                    </section>
                )}
                {!!recommended?.length && (
                    <section className={styles.recommended}>
                        <h2>{recommendedTitle}</h2>
                        <div className="grid">
                            {recommended.map((post, index) => (
                                <BlogCard {...post} key={index} />
                            ))}
                        </div>
                    </section>
                )}
            </ConditionalWrapper>

            {author && (
                <div>
                    <h2>{authorTitle}</h2>
                    <Author {...author} />
                </div>
            )}
        </Layout>
    )
}

export default Blog
