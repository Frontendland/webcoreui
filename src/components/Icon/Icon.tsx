import React from 'react'
import type { IconProps } from './icon'

import Github from '../../icons/github.svg?raw'
import ArrowDown from '../../icons/arrow-down.svg?raw'

const iconMap = {
    'github': Github,
    'arrow-down': ArrowDown
}

export const Icon = ({
    type,
    size = 24,
    color
}: IconProps) => {
    const icon = iconMap[type]
        .replace('width="24"', `width=${size}`)
        .replace('height="24"', color
            ? `height=${size} color=${color}`
            : `height=${size}`)

    return <div dangerouslySetInnerHTML={{ __html: icon }} />
}
