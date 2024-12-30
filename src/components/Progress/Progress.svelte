<script lang="ts">
    import type { ProgressProps } from './progress'

    import { classNames } from '../../utils/classNames'

    import styles from './progress.module.scss'

    const {
        value,
        size,
        label,
        color,
        background,
        square,
        striped,
        stripeLight,
        stripeDark,
        className
    }: ProgressProps = $props()

    const classes = classNames([
        styles['w-progress'],
        size && styles[size],
        striped && styles.striped,
        square && styles.square,
        className
    ])

    const styleVariables = classNames([
        color && `--w-progress-color: ${color};`,
        background && `--w-progress-background: ${background};`,
        stripeLight && `--w-progress-stripe-light: ${stripeLight};`,
        stripeDark && `--w-progress-stripe-dark: ${stripeDark};`
    ])
</script>

<div class={classes} style={styleVariables || null}>
    <div class={styles.progress} style={`--w-progress-width: ${value}%;`}>
        {#if label}
            {`${value}%`}
        {/if}
    </div>
</div>
