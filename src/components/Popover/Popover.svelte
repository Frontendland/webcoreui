<script lang="ts">
    import type { PopoverProps } from './popover'

    import { classNames } from '../../utils/classNames'

    import styles from './popover.module.scss'

    export let id: PopoverProps['id'] = ''
    export let className: PopoverProps['className'] = ''

    const classes = classNames([
        styles.popover,
        className
    ])
</script>

<dialog
    class={classes}
    id={id || null}
    {...$$restProps}
>
    <slot />
</dialog>
