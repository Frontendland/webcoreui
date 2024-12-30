<script lang="ts">
    import type { SvelteSpoilerProps } from './spoiler'

    import { classNames } from '../../utils/classNames'

    import styles from './spoiler.module.scss'

    const {
        color,
        animated = true,
        block,
        tooltip,
        tooltipPosition,
        children
    }: SvelteSpoilerProps = $props()

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
    data-tooltip={tooltip}
    data-position={tooltipPosition}
    role="button"
    tabindex="0"
    onclick={toggle}
    onkeyup={toggle}
>
    {@render children?.()}
</span>
