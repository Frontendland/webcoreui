import React from 'react'
import type { IconProps } from './icon'
import iconMap from './map'

const Icon = ({
    type,
    size = 24,
    color,
    theme,
    iconSet
}: IconProps) => {
    const icons = {
        ...iconMap,
        ...(iconSet || {})
    }

    const svg = icons[type as keyof typeof iconMap]

    if (!svg) {
        // eslint-disable-next-line no-console
        console.error('Cannot find icon type:', type)
    }

    const icon = svg
        ?.replace('width="24"', `width=${size}`)
        ?.replace('height="24"', color || theme
            ? `height=${size} color=${color || `var(--w-color-${theme})`}`
            : `height=${size}`)

    return <span dangerouslySetInnerHTML={{ __html: icon }} />
}

export default Icon
