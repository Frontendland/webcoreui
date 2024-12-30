<script lang="ts">
    import type { SvelteTimelineProps } from './timeline'

    import { classNames } from '../../utils/classNames'

    import styles from './timeline.module.scss'

    const {
        theme,
        counter,
        alternate,
        centered,
        color,
        textColor,
        className,
        children
    }: SvelteTimelineProps = $props()

    const classes = classNames([
        styles.timeline,
        theme && theme.split(' ').map(style => styles[style]),
        alternate && styles.alternate,
        centered && styles.centered,
        className
    ])

    const styleVariables = classNames([
        color && `--w-timeline-color: ${color};`,
        textColor && `--w-timeline-text-color: ${textColor};`,
        counter && `--w-timeline-counter: ${counter};`
    ])
</script>

<ul class={classes} style={styleVariables || null}>
    {@render children?.()}
</ul>
