<script lang="ts">
    import type { SpinnerProps } from './spinner'

    import { classNames } from '../../utils/classNames'

    import styles from './spinner.module.scss'

    const {
        color,
        width,
        speed,
        size,
        dashArray
    }: SpinnerProps = $props()

    const classes = classNames([
        styles.spinner,
        dashArray && styles.dashed
    ])

    const styleVariables = classNames([
        color && `--w-spinner-color: ${color};`,
        width && `--w-spinner-width: ${width}px;`,
        speed && `--w-spinner-speed: ${speed}s;`,
        size && `--w-spinner-size: ${size}px;`,
        dashArray && `--w-spinner-dash: ${dashArray}`
    ])
</script>

<svg
    class={classes}
    viewBox="25 25 50 50"
    role="status"
    style={styleVariables}
>
    <circle
        class={styles.path}
        cx="50"
        cy="50"
        r="20"
        fill="none"
    />
</svg>
