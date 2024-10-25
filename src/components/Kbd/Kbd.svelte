<script lang="ts">
    import type { KbdProps } from './kbd'
    import { keyMap } from './keyMap'

    import { classNames } from '../../utils/classNames'

    import styles from './kbd.module.scss'

    export let keys: KbdProps['keys'] = []
    export let className: KbdProps['className'] = ''

    const classes = classNames([
        styles.kbd,
        className
    ])
</script>

<kbd class={classes}>{keys?.map(key => keyMap[key]).join('')}<slot /></kbd>
