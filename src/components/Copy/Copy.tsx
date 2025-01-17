import React, { useRef, useState } from 'react'
import type { ReactCopyProps } from './copy'

import Badge from '../Badge/Badge.tsx'

import { classNames } from '../../utils/classNames'

import circleCheck from '../../icons/circle-check.svg?raw'
import copy from '../../icons/copy.svg?raw'

import styles from './copy.module.scss'

const Copy = ({
    tooltip,
    tooltipPosition,
    copyIcon,
    copiedIcon,
    className,
    children,
    ...rest
}: ReactCopyProps) => {
    const copyButton = useRef<HTMLButtonElement>(null)
    const copiedButton = useRef<HTMLSpanElement>(null)
    const [tooltipText, setTooltipText] = useState(tooltip)

    const classes = classNames([
        styles.copy,
        className
    ])

    const copyText = () => {
        const copyButtonElement = copyButton.current as HTMLButtonElement
        const copiedButtonElement = copiedButton.current as HTMLSpanElement

        const text = copyButtonElement.parentElement?.previousSibling?.textContent?.trim()
            || copyButtonElement.parentElement?.previousElementSibling?.textContent?.trim()

        copyButtonElement.style.opacity = '0'
        copyButtonElement.style.pointerEvents = 'none'

        copiedButtonElement.style.opacity = '1'

        setTooltipText('')

        navigator.clipboard.writeText(text as string)
    }

    return (
        <Badge
            {...rest}
            className={classes}
            data-tooltip={tooltipText || undefined}
            data-position={tooltipPosition}
        >
            {children}
            <div className={styles.icons}>
                <button
                    className={styles['copy-icon']}
                    ref={copyButton}
                    onClick={copyText}
                    aria-label="copy"
                    dangerouslySetInnerHTML={{ __html: copyIcon || copy }}
                />
                <span
                    className={styles.copied}
                    ref={copiedButton}
                    dangerouslySetInnerHTML={{ __html: copiedIcon || circleCheck }}
                />
            </div>
        </Badge>
    )
}

export default Copy
