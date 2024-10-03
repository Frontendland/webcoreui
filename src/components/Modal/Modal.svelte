<script lang="ts">
    import type { ModalProps } from './modal'

    import Button from '../Button/Button.svelte'

    import { classNames } from '../../utils/classNames'

    import alert from '../../icons/alert.svg?raw'
    import success from '../../icons/circle-check.svg?raw'
    import closeIcon from '../../icons/close.svg?raw'
    import info from '../../icons/info.svg?raw'
    import warning from '../../icons/warning.svg?raw'

    import styles from './modal.module.scss'

    export let title: ModalProps['title'] = ''
    export let subTitle: ModalProps['subTitle'] = ''
    export let showCloseIcon: ModalProps['showCloseIcon'] = true
    export let closeOnEsc: ModalProps['closeOnEsc'] = true
    export let closeOnOverlay: ModalProps['closeOnOverlay'] = true
    export let transparent: ModalProps['transparent'] = false
    export let theme: ModalProps['theme'] = null
    export let id : ModalProps['className'] = ''
    export let className: ModalProps['className'] = ''

    const iconMap = {
        info,
        success,
        warning,
        alert
    }

    const classes = classNames([
        styles.modal,
        transparent && styles.transparent,
        theme && styles[theme],
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
    {...$$restProps}
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
        <strong class={styles.title}>
            {#if theme}
                {@html iconMap[theme]}
            {/if}
            {title}
        </strong>
    {/if}
    {#if subTitle}
        <div class={styles.subTitle}>{subTitle}</div>
    {/if}
    <slot />
</dialog>
<div class={styles.overlay} />
