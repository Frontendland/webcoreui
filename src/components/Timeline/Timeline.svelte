<script lang="ts">
    import type { TimelineProps } from './timeline'

    import { classNames } from '../../utils/classNames'

    import styles from './timeline.module.scss'

    export let theme: TimelineProps['theme'] = null
    export let counter: TimelineProps['counter'] = null
    export let alternate: TimelineProps['alternate'] = false
    export let centered: TimelineProps['centered'] = false
    export let color: TimelineProps['color'] = ''
    export let textColor: TimelineProps['textColor'] = ''
    export let className: TimelineProps['className'] = ''

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
    <slot />
</ul>
