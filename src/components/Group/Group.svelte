<script lang="ts">
    import type { SvelteGroupProps } from './group'

    import { classNames } from '../../utils/classNames'

    import styles from './group.module.scss'

    const {
        withSeparator,
        className,
        children
    }: SvelteGroupProps = $props()

    const classes = classNames([
        styles.group,
        withSeparator && styles.separator,
        className
    ])
</script>

<div class={classes}>
    {@render children?.()}
</div>
