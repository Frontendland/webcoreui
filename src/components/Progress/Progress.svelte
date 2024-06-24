<script lang="ts">
    import type { ProgressProps } from './progress'
    import './progress.scss'

    export let value: ProgressProps['value'] = 0
    export let size: ProgressProps['size'] = null
    export let label: ProgressProps['label'] = false
    export let color: ProgressProps['color'] = ''
    export let background: ProgressProps['background'] = ''
    export let square: ProgressProps['square'] = false
    export let striped: ProgressProps['striped'] = false
    export let stripeLight: ProgressProps['stripeLight'] = ''
    export let stripeDark: ProgressProps['stripeDark'] = ''
    export let className: ProgressProps['className'] = ''

    const classes = [
        'w-progress',
        size,
        striped && 'striped',
        square && 'square',
        className
    ].filter(Boolean).join(' ')

    const styles = [
        color && `--w-progress-color: ${color};`,
        background && `--w-progress-background: ${background};`,
        stripeLight && `--w-progress-stripe-light: ${stripeLight};`,
        stripeDark && `--w-progress-stripe-dark: ${stripeDark};`
    ].filter(Boolean).join('')
</script>

<div class={classes} style={styles}>
    <div class="progress" style={`--w-progress-width: ${value}%;`}>
        {#if label}
            {`${value}%`}
        {/if}
    </div>
</div>
