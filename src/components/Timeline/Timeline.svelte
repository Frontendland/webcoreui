<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { TimelineProps } from './timeline'

    import { classNames } from '../../utils/classNames'

    import styles from './timeline.module.scss'

    export type Props = TimelineProps & {
        children: Snippet
    }

    const {
        theme,
        counter,
        alternate,
        centered,
        color,
        textColor,
        className,
        children
    }: Props = $props()

    const classes = $derived(classNames([
        styles.timeline,
        theme && theme.split(' ').map(style => styles[style]),
        alternate && styles.alternate,
        centered && styles.centered,
        className
    ]))

    const styleVariables = $derived(classNames([
        color && `--w-timeline-color: ${color};`,
        textColor && `--w-timeline-text-color: ${textColor};`,
        counter && `--w-timeline-counter: ${counter};`
    ]))
</script>

<ul class={classes} style={styleVariables || null}>
    {@render children?.()}
</ul>
