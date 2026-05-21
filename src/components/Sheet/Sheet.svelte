<script lang="ts">
    import type { SheetProps } from './sheet'

    import Modal, { type Props as ModalProps } from '../Modal/Modal.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './sheet.module.scss'

    export type Props = SheetProps & ModalProps

    const {
        position,
        className,
        children,
        ...rest
    }: Props = $props()

    const classes = $derived(classNames([
        styles.sheet,
        position && styles[position],
        className
    ]))
</script>

<Modal
    className={classes}
    {...rest}
>
    {@render children?.()}
</Modal>
