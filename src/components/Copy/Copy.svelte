<script lang="ts">
    import type { CopyProps } from './copy'

    import Badge from '../Badge/Badge.svelte'

    import { classNames } from '../../utils/classNames'

    import circleCheck from '../../icons/circle-check.svg?raw'
    import copy from '../../icons/copy.svg?raw'

    import styles from './copy.module.scss'

    export let tooltip: CopyProps['tooltip'] = ''
    export let tooltipPosition: CopyProps['tooltipPosition'] = null
    export let copyIcon: CopyProps['copyIcon'] = ''
    export let copiedIcon: CopyProps['copiedIcon'] = ''
    export let className: CopyProps['className'] = ''

    const classes = classNames([
        styles.copy,
        className
    ])

    let copyButton: HTMLButtonElement
    let copiedButton: HTMLSpanElement

    const copyText = () => {
        const text = copyButton
            .parentElement
            ?.parentElement
            ?.querySelector('[data-id="text"]')
            ?.textContent?.trim()

        copyButton.style.opacity = '0'
        copyButton.style.pointerEvents = 'none'

        copiedButton.style.opacity = '1'
        tooltip = ''

        navigator.clipboard.writeText(text as string)
    }
</script>

<Badge
    {...$$restProps}
    className={classes}
    data-tooltip={tooltip || undefined}
    data-position={tooltipPosition}
>
    <span data-id="text"><slot /></span>
    <div class={styles.icons}>
        <button
            class={styles['copy-icon']}
            bind:this={copyButton}
            on:click={copyText}
        >
            {@html copyIcon || copy}
        </button>
        <span class={styles.copied} bind:this={copiedButton}>
            {@html copiedIcon || circleCheck}
        </span>
    </div>
</Badge>
