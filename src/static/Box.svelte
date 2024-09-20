<script>
    import { classNames } from '@utils/classNames'

    import styles from './box.module.scss'

    export let fullWidth = false

    const classes = classNames([
        styles.box,
        fullWidth && styles.full
    ])
</script>

<div class={classes}><slot /></div>
