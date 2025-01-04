import React from 'react'
import type { ReactProductPageProps } from './productPage'

import BlogCard from '@blocks/BlogCard/BlogCard.tsx'
import Button from '@blocks/Button/Button.tsx'
import IconList from '@blocks/IconList/IconList.tsx'
import Layout from '@blocks/Layout/Layout.tsx'

import styles from './product-page.module.scss'

import { Carousel } from 'webcoreui/react'

const ProductPage = ({
    layout,
    images,
    carousel,
    buttons,
    features,
    recommended,
    children,
    ...rest
}: ReactProductPageProps) => {
    const ATF = () => {
        if (!images?.length) {
            return null
        }

        return (
            <Carousel
                {...carousel}
                items={images.length}
                className={styles.container}
                wrapperClassName={styles.carousel}
            >
                {images.map((img, index) => (
                    <li key={index}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            loading={img.lazy ? 'lazy' : undefined}
                        />
                    </li>
                ))}
            </Carousel>
        )
    }

    const Sidebar = () => {
        if (!(buttons?.length || features?.length)) {
            return null
        }

        return (
            <aside className={styles.sidebar}>
                {!!buttons?.length && (
                    <div className="grid sm">
                        {buttons?.map((button, index) => (
                            <Button {...button} key={index} />
                        ))}
                    </div>
                )}
                {!!features?.length && (
                    <React.Fragment>
                        <hr className={styles.separator} />
                        <IconList items={features} />
                    </React.Fragment>
                )}
            </aside>
        )
    }

    const Recommendations = () => {
        if (!recommended?.items?.length) {
            return null
        }

        return (
            <section slot="above-footer" className="container">
                <h2>{recommended.title || 'Recommended'}</h2>
                <div className="grid sm-3">
                    {recommended.items.map((item, index) => (
                        <BlogCard {...item} key={index} />
                    ))}
                </div>
            </section>
        )
    }

    return (
        <Layout
            {...layout}
            {...rest}
            className={styles.main}
            atf={ATF()}
            rightSidebar={Sidebar()}
            aboveFooter={Recommendations()}
        >

            {children}
        </Layout>
    )
}

export default ProductPage
