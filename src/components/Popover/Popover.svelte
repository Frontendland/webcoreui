<script lang="ts">
    import type { SveltePopoverProps } from './popover'

    import { classNames } from '../../utils/classNames'

    import styles from './popover.module.scss'

    const {
        id,
        className,
        transparent,
        children,
        ...rest
    }: SveltePopoverProps = $props()

    const classes = classNames([
        styles.popover,
        transparent && styles.transparent,
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
