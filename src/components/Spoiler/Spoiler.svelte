<script lang="ts">
    import type { SpoilerProps } from './spoiler'

    import { classNames } from '../../utils/classNames'

    import styles from './spoiler.module.scss'

    export let color: SpoilerProps['color'] = ''
    export let animated: SpoilerProps['animated'] = true
    export let block: SpoilerProps['block'] = false
    export let tooltip: SpoilerProps['tooltip'] = ''
    export let tooltipPosition: SpoilerProps['tooltipPosition'] = null

    const classes = classNames([
        styles.spoiler,
        animated && styles.anim,
        block && styles.block
    ])

    const style = color
        ? `--w-spoiler-color: ${color};`
        : null

    const toggle = (event: MouseEvent | KeyboardEvent) => {
        const target = event.currentTarget as HTMLSpanElement

        target.dataset.visible = 'true'
        target.removeAttribute('data-tooltip')
        target.removeAttribute('role')
        target.removeAttribute('tabindex')
    }
</script>

<span
    class={classes}
    style={style}
    data-tooltip={tooltip || null}
    data-position={tooltipPosition}
    role="button"
    tabindex="0"
    on:click={toggle}
    on:keyup={toggle}
>
    <slot />
</span>
