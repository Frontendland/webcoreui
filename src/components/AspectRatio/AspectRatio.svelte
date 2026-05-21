<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { AspectRatioProps } from './aspectratio'

    import { classNames } from '../../utils/classNames'

    import styles from './aspect-ratio.module.scss'

    export type Props = AspectRatioProps & {
        children: Snippet
    }

    const {
        ratio,
        className,
        children
    }: Props = $props()

    const classes = $derived(classNames([
        styles.ratio,
        className
    ]))
</script>

<div class={classes} style={`aspect-ratio: ${ratio.replace(':', '/')};`}>
    {@render children?.()}
</div>
