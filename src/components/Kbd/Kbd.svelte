<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { KbdProps } from './kbd'
    import { keyMap } from './keyMap'

    import { classNames } from '../../utils/classNames'

    import styles from './kbd.module.scss'

    export type Props = KbdProps & {
        children?: Snippet
    }

    const {
        keys,
        className,
        children
    }: Props = $props()

    const classes = $derived(classNames([
        styles.kbd,
        className
    ]))
</script>

<kbd class={classes}>{keys?.map(key => keyMap[key]).join('')}{@render children?.()}</kbd>
