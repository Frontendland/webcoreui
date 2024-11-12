<script lang="ts">
    import type { SkeletonProps } from './skeleton'

    import { classNames } from '../../utils/classNames'

    import styles from './skeleton.module.scss'

    export let animate: SkeletonProps['animate'] = 'wave'
    export let type: SkeletonProps['type'] = 'rounded'
    export let width: SkeletonProps['width'] = 0
    export let height: SkeletonProps['height'] = 0
    export let color: SkeletonProps['color'] = ''
    export let waveColor: SkeletonProps['waveColor'] = ''
    export let className: SkeletonProps['className'] = ''

    const classes = classNames([
        animate && styles[animate],
        styles[type!],
        styles.skeleton,
        className
    ])

    const styleVariables = classNames([
        width && `width: ${width}px;`,
        height && `height: ${height}px;`,
        color && `--w-skeleton-color: ${color};`,
        waveColor && `--w-skeleton-wave-color: ${waveColor};`
    ])
</script>

<div class={classes} style={styleVariables}>&nbsp;</div>
