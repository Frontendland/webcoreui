<script lang="ts">
    import type { SpinnerProps } from './spinner'
    import './spinner.scss'

    export let color: SpinnerProps['color'] = ''
    export let width: SpinnerProps['width'] = 0
    export let speed: SpinnerProps['speed'] = 0
    export let size: SpinnerProps['size'] = 0
    export let dashArray: SpinnerProps['dashArray'] = 0

    const classes = [
        'w-spinner',
        dashArray && 'dashed'
    ].filter(Boolean).join(' ')

    const styles = [
        color && `--w-spinner-color: ${color};`,
        width && `--w-spinner-width: ${width}px;`,
        speed && `--w-spinner-speed: ${speed}s;`,
        size && `--w-spinner-size: ${size}px;`,
        dashArray && `--w-spinner-dash: ${dashArray}`,
    ].filter(Boolean).join(' ')
</script>

<svg
    class={classes}
    viewBox="25 25 50 50"
    role="status"
    style={styles}
>
    <circle
        class="spinner-path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
    />
</svg>
