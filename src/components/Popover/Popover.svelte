<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { PopoverProps } from './popover'

    import { classNames } from '../../utils/classNames'

    import styles from './popover.module.scss'

    export type SveltePopoverProps = {
        children: Snippet
    } & PopoverProps

    const {
        id,
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

<dialog
    class={classes}
    id={id}
    {...rest}
>
    {@render children?.()}
</dialog>
