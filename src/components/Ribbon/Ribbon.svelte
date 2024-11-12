<script lang="ts">
    import type { RibbonProps } from './ribbon'

    import { classNames } from '../../utils/classNames'

    import styles from './ribbon.module.scss'

    export let offset: RibbonProps['offset'] = 0
    export let type: RibbonProps['type'] = null
    export let theme: RibbonProps['theme'] = null
    export let className: RibbonProps['className'] = ''

    const classes = classNames([
        styles.ribbon,
        theme && styles[theme],
        type && styles[type],
        className
    ])
</script>

<span
    class={classes}
    style={offset ? `top:${offset}px;left:${offset}px` : null}
>
    <slot />
</span>
