<script lang="ts">
    import type { ModalProps } from './modal'

    import styles from './modal.module.scss'
    import { classNames } from '../../utils/classNames'

    import Button from '../Button/Button.svelte'
    import closeIcon from '../../icons/close.svg?raw'

    export let title: ModalProps['title'] = ''
    export let subTitle: ModalProps['subTitle'] = ''
    export let showCloseIcon: ModalProps['showCloseIcon'] = true
    export let closeOnEsc: ModalProps['closeOnEsc'] = true
    export let closeOnOverlay: ModalProps['closeOnOverlay'] = true
    export let id : ModalProps['className'] = ''
    export let className: ModalProps['className'] = ''

    const classes = classNames([
        styles.modal,
        className
    ])

    const close = [
        showCloseIcon && 'icon',
        closeOnEsc && 'esc',
        closeOnOverlay && 'overlay'
    ].filter(Boolean).join(',')
</script>

<dialog
    class={classes}
    id={id}
    data-close={close.length ? close : undefined}
>
    {#if showCloseIcon}
        <Button
            theme="flat"
            className={styles.close}
            data-id="close"
        >
            {@html closeIcon}
        </Button>
    {/if}
    {#if title}
        <strong class={styles.title}>{title}</strong>
    {/if}
    {#if subTitle}
        <div class={styles.subTitle}>{subTitle}</div>
    {/if}
    <slot />
</dialog>
<div class={styles.overlay} />
