<script lang="ts">
    import type { SheetProps } from './sheet'

    import Modal, { type SvelteModalProps } from '../Modal/Modal.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './sheet.module.scss'

    export type SvelteSheetProps = SheetProps & SvelteModalProps

    const {
        position,
        className,
        children,
        ...rest
    }: SvelteSheetProps = $props()

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
