<script lang="ts">
    import type { SveltePopoverProps } from './popover'

    import { classNames } from '../../utils/classNames'

    import styles from './popover.module.scss'

    const {
        id,
        className,
        children,
        ...rest
    }: SveltePopoverProps = $props()

    const classes = classNames([
        styles.popover,
        className
    ])
</script>

<dialog
    class={classes}
    id={id}
    {...rest}
>
    {@render children?.()}
</dialog>
