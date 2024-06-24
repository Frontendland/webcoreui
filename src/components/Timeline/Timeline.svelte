<script lang="ts">
    import type { TimelineProps } from './timeline'
    import './timeline.scss'

    export let theme: TimelineProps['theme'] = null
    export let counter: TimelineProps['counter'] = null
    export let alternate: TimelineProps['alternate'] = false
    export let centered: TimelineProps['centered'] = false
    export let color: TimelineProps['color'] = ''
    export let textColor: TimelineProps['textColor'] = ''
    export let className: TimelineProps['className'] = ''

    const classes = [
        'w-timeline',
        theme,
        alternate && 'alternate',
        centered && 'centered',
        className
    ].filter(Boolean).join(' ')

    const styles = [
        color && `--w-timeline-color: ${color};`,
        textColor && `--w-timeline-text-color: ${textColor};`,
        counter && `--w-timeline-counter: ${counter};`,
    ].join('')
</script>

<ul class={classes} style={styles}>
    <slot />
</ul>
