import React from 'react'
import { classNames } from 'webcoreui'
import { ConditionalWrapper, Footer, Menu } from 'webcoreui/react'

import SEO from '@blocks/SEO/SEO.tsx'

import type { ReactLayoutProps } from './layout'
import './layout.scss'

const Layout = ({
    seo,
    menu,
    footer,
    className,
    insideMenu,
    atf,
    leftSidebar,
    rightSidebar,
    aboveFooter,
    insideFooter,
    scripts,
    children,
    ...rest
}: ReactLayoutProps) => {
    const hasSidebar = leftSidebar || rightSidebar

    const containerClasses = classNames([
        'container',
        hasSidebar && 'flex column sm-row',
        !hasSidebar && className
    ])

    return (
        <html lang="en">
            <head>
                <SEO {...seo} />
            </head>
            <body {...rest}>
                {menu && (
                    <Menu {...menu}>
                        {insideMenu || <span />}
                    </Menu>
                )}
                {atf}
                <main className={containerClasses}>
                    {leftSidebar}
                    <ConditionalWrapper
                        condition={!!hasSidebar}
                        wrapper={children => <div className={className}>{children}</div>}
                    >
                        {children}
                    </ConditionalWrapper>
                    {rightSidebar}
                </main>
                {aboveFooter}
                {footer && (
                    <Footer {...footer}>
                        {insideFooter}
                    </Footer>
                )}
                {scripts}
            </body>
        </html>
    )
}

export default Layout
