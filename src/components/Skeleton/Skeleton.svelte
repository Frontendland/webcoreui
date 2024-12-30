<script lang="ts">
    import type { SkeletonProps } from './skeleton'

    import { classNames } from '../../utils/classNames'

    import styles from './skeleton.module.scss'

    const {
        animate = 'wave',
        type = 'rounded',
        width,
        height,
        color,
        waveColor,
        className
    }: SkeletonProps = $props()

    const classes = classNames([
        animate && styles[animate],
        styles[type!],
        styles.skeleton,
        className
    ])

    const styleVariables = classNames([
        width && `max-width: ${width}px;`,
        height && `max-height: ${height}px;`,
        color && `--w-skeleton-color: ${color};`,
        waveColor && `--w-skeleton-wave-color: ${waveColor};`
    ])
</script>

<div class={classes} style={styleVariables}>&nbsp;</div>
