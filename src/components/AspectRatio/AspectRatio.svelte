<script lang="ts">
    import type { AspectRatioProps } from './aspectratio'

    import { classNames } from '../../utils/classNames'

    import styles from './aspect-ratio.module.scss'

    export let ratio: AspectRatioProps['ratio'] = ''
    export let className: AspectRatioProps['className'] = ''

    const classes = classNames([
        styles.ratio,
        className
    ])
</script>

<div class={classes} style={`aspect-ratio: ${ratio.replace(':', '/')};`}>
    <slot />
</div>
