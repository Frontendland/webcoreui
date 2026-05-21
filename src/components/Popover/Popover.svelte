<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLDialogAttributes } from 'svelte/elements'
    import type { PopoverProps } from './popover'

    import { classNames } from '../../utils/classNames'

    import styles from './popover.module.scss'

    export type Props = PopoverProps<HTMLDialogAttributes> & {
        children: Snippet
    }

    const {
        className,
        transparent,
        children,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        styles.popover,
        transparent && styles.transparent,
        className
    ]))
</script>

<dialog {...rest} class={classes}>
    {@render children?.()}
</dialog>
