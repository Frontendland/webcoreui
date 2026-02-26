import React, { useEffect, useRef } from 'react'
import type { ImageLoaderProps } from './imageloader'

import Image from '../Image/Image.tsx'
import Skeleton from '../Skeleton/Skeleton.tsx'

import styles from './imageloader.module.scss'

const ImageLoader = ({
    fallback,
    animate,
    type,
    width,
    height,
    color,
    waveColor,
    className,
    ...rest
}: ImageLoaderProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const styleVariables = {
        width,
        height
    }

    useEffect(() => {
        if (!containerRef.current) {
            return
        }

        const img = containerRef.current.querySelector<HTMLImageElement>('img')
        const skeleton = containerRef.current.querySelector<HTMLDivElement>('div')

        if (!img) {
            return
        }

        const removeSkeleton = () => skeleton?.remove()

        const handleError = () => {
            img.src = img.dataset.fallback || img.src
            removeSkeleton()
        }

        if (img.complete) {
            img.naturalWidth === 0 ? handleError() : removeSkeleton()

            return
        }

        img.addEventListener('load', removeSkeleton, { once: true })
        img.addEventListener('error', handleError, { once: true })

        return () => {
            img.removeEventListener('load', removeSkeleton)
            img.removeEventListener('error', handleError)
        }
    }, [containerRef])

    return (
        <div className={styles.loader} style={styleVariables} ref={containerRef}>
            <Skeleton
                animate={animate}
                type={type}
                width={Number(width)}
                height={Number(height)}
                color={color}
                waveColor={waveColor}
                className={className}
            />
            <Image
                width={width}
                height={height}
                className={className}
                data-fallback={fallback}
                {...rest}
            />
        </div>
    )
}

export default ImageLoader
