<script lang="ts">
    import type { SvelteRibbonProps } from './ribbon'

    import { classNames } from '../../utils/classNames'

    import styles from './ribbon.module.scss'

    const {
        offset,
        type,
        theme,
        className,
        children
    }: SvelteRibbonProps = $props()

    const classes = $derived(classNames([
        styles.ribbon,
        theme && styles[theme],
        type && styles[type],
        className
    ]))
</script>

<span
    class={classes}
    style={offset ? `top:${offset}px;left:${offset}px` : null}
>
    {@render children?.()}
</span>
