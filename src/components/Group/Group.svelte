<script lang="ts">
    import type { GroupProps } from './group'

    import { classNames } from '../../utils/classNames'

    import styles from './group.module.scss'

    export let withSeparator: GroupProps['withSeparator'] = false
    export let outline: GroupProps['outline'] = false
    export let className: GroupProps['className'] = ''

    const classes = classNames([
        styles.group,
        withSeparator && styles.separator,
        outline && styles.outline,
        className
    ])
</script>

<div class={classes}>
    <slot />
</div>
