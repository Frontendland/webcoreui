<script lang="ts">
    import type { PopoverProps } from './popover'

    import styles from './popover.module.scss'
    import { classNames } from '../../utils/classNames'

    export let id: PopoverProps['id'] = ''
    export let className: PopoverProps['className'] = ''

    const classes = classNames([
        styles.popover,
        className
    ])
</script>

<dialog
    class={classes}
    id={id}
>
    <slot />
</dialog>
