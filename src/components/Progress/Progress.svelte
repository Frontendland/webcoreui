<script lang="ts">
    import type { ProgressProps } from './progress'

    import { classNames } from '../../utils/classNames'

    import styles from './progress.module.scss'

    export type Props = ProgressProps

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
        indeterminate,
        className
    }: Props = $props()

    const classes = $derived(classNames([
        styles['w-progress'],
        size && styles[size],
        striped && styles.striped,
        square && styles.square,
        indeterminate && styles.indeterminate,
        className
    ]))

    const styleVariables = $derived(classNames([
        color && `--w-progress-color: ${color};`,
        background && `--w-progress-background: ${background};`,
        stripeLight && `--w-progress-stripe-light: ${stripeLight};`,
        stripeDark && `--w-progress-stripe-dark: ${stripeDark};`
    ]))

    const currentValue = $derived(indeterminate && !value ? 20 : value)
</script>

<div class={classes} style={styleVariables || null}>
    <div class={styles.progress} style={`--w-progress-width: ${currentValue}%;`}>
        {#if label}
            {`${currentValue}%`}
        {/if}
    </div>
</div>
