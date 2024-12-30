<script lang="ts">
    import type { SvelteKbdProps } from './kbd'
    import { keyMap } from './keyMap'

    import { classNames } from '../../utils/classNames'

    import styles from './kbd.module.scss'

    const {
        keys,
        className,
        children
    }: SvelteKbdProps = $props()

    const classes = classNames([
        styles.kbd,
        className
    ])
</script>

<kbd class={classes}>{keys?.map(key => keyMap[key]).join('')}{@render children?.()}</kbd>
