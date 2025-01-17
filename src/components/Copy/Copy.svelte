<script lang="ts">
    import type { SvelteCopyProps } from './copy'

    import Badge from '../Badge/Badge.svelte'

    import { classNames } from '../../utils/classNames'

    import circleCheck from '../../icons/circle-check.svg?raw'
    import copy from '../../icons/copy.svg?raw'

    import styles from './copy.module.scss'

    let {
        tooltip = $bindable(''),
        tooltipPosition,
        copyIcon,
        copiedIcon,
        className,
        children,
        ...rest
    }: SvelteCopyProps = $props()

    const classes = classNames([
        styles.copy,
        className
    ])

    let copyButton: HTMLButtonElement | undefined = $state()
    let copiedButton: HTMLSpanElement | undefined = $state()

    const copyText = () => {
        const text = copyButton
            ?.parentElement
            ?.parentElement
            ?.querySelector('[data-id="text"]')
            ?.textContent?.trim()

        copyButton!.style.opacity = '0'
        copyButton!.style.pointerEvents = 'none'

        copiedButton!.style.opacity = '1'
        tooltip = ''

        navigator.clipboard.writeText(text as string)
    }
</script>

<Badge
    {...rest}
    className={classes}
    data-tooltip={tooltip || undefined}
    data-position={tooltipPosition}
>
    <span data-id="text">{@render children?.()}</span>
    <div class={styles.icons}>
        <button
            bind:this={copyButton}
            class={styles['copy-icon']}
            onclick={copyText}
            aria-label="copy"
        >
            {@html copyIcon || copy}
        </button>
        <span class={styles.copied} bind:this={copiedButton}>
            {@html copiedIcon || circleCheck}
        </span>
    </div>
</Badge>
