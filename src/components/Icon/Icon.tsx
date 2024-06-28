import React from 'react'
import type { IconProps } from './icon'
import iconMap from './map'

const Icon = ({
    type,
    size = 24,
    color
}: IconProps) => {
    const icon = iconMap[type as keyof typeof iconMap]
        .replace('width="24"', `width=${size}`)
        .replace('height="24"', color
            ? `height=${size} color=${color}`
            : `height=${size}`)

    return <span dangerouslySetInnerHTML={{ __html: icon }} />
}

export default Icon
