<script lang="ts">
    import type { SvelteSheetProps } from './sheet'

    import Modal from '../Modal/Modal.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './sheet.module.scss'

    const {
        position,
        className,
        children,
        ...rest
    }: SvelteSheetProps = $props()

    const classes = classNames([
        styles.sheet,
        position && styles[position],
        className
    ])
</script>

<Modal
    className={classes}
    {...rest}
>
    {@render children?.()}
</Modal>
