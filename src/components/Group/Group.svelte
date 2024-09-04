<script lang="ts">
    import type { GroupProps } from './group'

    import { classNames } from '../../utils/classNames'

    import styles from './group.module.scss'

    export let withSeparator: GroupProps['withSeparator'] = false
    export let className: GroupProps['className'] = ''

    const classes = classNames([
        styles.group,
        withSeparator && styles.separator,
        className
    ])
</script>

<div class={classes}>
    <slot />
</div>
