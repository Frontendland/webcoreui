<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { HTMLDialogAttributes } from 'svelte/elements'
    import type { PopoverProps } from './popover'

    import { classNames } from '../../utils/classNames'

    import styles from './popover.module.scss'

    export type SveltePopoverProps = {
        children: Snippet
    } & PopoverProps<HTMLDialogAttributes>

    const {
        className,
        transparent,
        children,
        ...rest
    }: SveltePopoverProps = $props()

    const classes = $derived(classNames([
        styles.popover,
        transparent && styles.transparent,
        className
    ]))
</script>

<dialog {...rest} class={classes}>
    {@render children?.()}
</dialog>
