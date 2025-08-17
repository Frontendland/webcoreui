import React, { useEffect, useRef } from 'react'
import type { ReactContextMenuProps } from './contextmenu'

import { classNames } from '../../utils/classNames'
import { on } from '../../utils/DOMUtils'

import styles from './contextmenu.module.scss'

const ContextMenu = ({
    Element = 'div',
    className,
    children,
    context,
    ...rest
}: ReactContextMenuProps) => {
    const ctx = useRef<HTMLElement>(null)
    const content = useRef<HTMLDivElement>(null)
    const classes = classNames([
        styles.ctx,
        className
    ])

    const showContext = (event: MouseEvent) => {
        event.preventDefault()

        if (content.current) {
            const target = event.currentTarget as HTMLElement
            const rect = target.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            content.current.style.top = `${y}px`
            content.current.style.left = `${x}px`
            content.current.dataset.show = 'true'
        }
    }

    const hideContext = (event: MouseEvent) => {
        if (content.current) {
            if (content.current.contains(event.target as Node)) {
                return
            }

            content.current.dataset.show = 'false'

            setTimeout(() => {
                if (content.current) {
                    content.current.style.top = ''
                    content.current.style.left = ''
                }
            }, 200)
        }
    }

    useEffect(() => {
        if (ctx.current) {
            on(ctx.current, 'contextmenu', showContext)
            on(document, 'click', hideContext)
        }

        return () => {
            ctx.current?.removeEventListener('contextmenu', showContext)
            document.removeEventListener('click', hideContext)
        }
    }, [])

    if (!context) {
        // eslint-disable-next-line no-console
        console.error('Missing `context` prop. Add `context={...}` to your <ContextMenu> component.')
    }

    return (
        <Element {...rest} className={classes} ref={ctx}>
            {children}
            <div className={styles.content} ref={content} onClick={event => event.stopPropagation()}>
                {context}
            </div>
        </Element>

    )
}

export default ContextMenu
