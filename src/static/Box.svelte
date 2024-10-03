<script>
    import { classNames } from '@utils/classNames'

    import styles from './box.module.scss'

    export let fullWidth = false
    export let width = 0
    export let height = 0

    const classes = classNames([
        styles.box,
        fullWidth && styles.full
    ])

    const dimensions = {
        width,
        height
    }

    const cssStyles = Object.keys(dimensions)
        .filter(key => dimensions[key])
        .map(key => `${key}:${dimensions[key]}px`).join(';')
</script>

<div class={classes} style={cssStyles || undefined}><slot /></div>
