import React, { useState, useEffect } from 'react'

import github from '../../icons/github'

export const Icon = ({
    type,
    size = 24,
    color
}) => {
    const [icon, setIcon] = useState('')

    useEffect(() => {
        (async () => {
            const icon = (await import(`../../icons/${type}.js`)).default;

            setIcon(icon)
        })()
    }, [])

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            color={color}
            dangerouslySetInnerHTML={{ __html: github }}
        />
    )
}

