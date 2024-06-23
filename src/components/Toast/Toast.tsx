import React from 'react'
import type { ToastProps } from './toast'

import './toast.scss'

const Toast = ({
    className
}: ToastProps) => {
    const classes = [
        'w-toast',
        className
    ].filter(Boolean).join(' ')

    return <div>Toast</div>
}

export default Toast