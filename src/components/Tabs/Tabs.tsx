import React from 'react'
import type { TabsProps } from './tabs'

import './tabs.scss'

const Tabs = ({
    className
}: TabsProps) => {
    const classes = [
        'w-tabs',
        className
    ].filter(Boolean).join(' ')

    return <div>Tabs</div>
}

export default Tabs