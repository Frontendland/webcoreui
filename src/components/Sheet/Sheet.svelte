<script lang="ts">
    import type { SheetProps } from './sheet'

    import Modal from '../Modal/Modal.svelte'

    import styles from './sheet.module.scss'
    import { classNames } from '../../utils/classNames'

    export let position: SheetProps['position'] = null
    export let className: SheetProps['className'] = ''

    const classes = classNames([
        styles.sheet,
        position && styles[position],
        className
    ])
</script>

<Modal
    className={classes}
    {...$$restProps}
>
    <slot />
</Modal>
