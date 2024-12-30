<script lang="ts">
    import type { SvelteAspectRatioProps } from './aspectratio'

    import { classNames } from '../../utils/classNames'

    import styles from './aspect-ratio.module.scss'

    const {
        ratio,
        className,
        children
    }: SvelteAspectRatioProps = $props()

    const classes = classNames([
        styles.ratio,
        className
    ])
</script>

<div class={classes} style={`aspect-ratio: ${ratio.replace(':', '/')};`}>
    {@render children?.()}
</div>
