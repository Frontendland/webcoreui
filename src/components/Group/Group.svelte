<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { GroupProps } from './group'

    import { classNames } from '../../utils/classNames'

    import styles from './group.module.scss'

    export type Props = GroupProps & {
        children: Snippet
    }

    const {
        withSeparator,
        className,
        children
    }: Props = $props()

    const classes = $derived(classNames([
        styles.group,
        withSeparator && styles.separator,
        className
    ]))
</script>

<div class={classes}>
    {@render children?.()}
</div>
