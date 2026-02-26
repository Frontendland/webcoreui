import type { ImageProps } from '../Image/image'
import type { SkeletonProps } from '../Skeleton/skeleton'

export type ImageLoaderProps = {
    fallback?: string
} & ImageProps & Omit<SkeletonProps, 'width' | 'height'>
