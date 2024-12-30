<script lang="ts">
    import type { SvelteSliderProps } from './slider'

    import { classNames } from '../../utils/classNames'

    import styles from './slider.module.scss'

    const {
        min,
        max,
        value,
        step,
        disabled,
        color,
        background,
        thumb,
        id,
        className,
        onChange
    }: SvelteSliderProps = $props()

    const classes = classNames([
        styles.slider,
        className
    ])

    const styleVariables = classNames([
        color && `--w-slider-color: ${color};`,
        background && `--w-slider-background: ${background};`,
        thumb && `--w-slider-thumb: ${thumb};`
    ])
</script>

<input
    type="range"
    min={min}
    max={max}
    value={value || min}
    step={step}
    disabled={disabled}
    class={classes}
    id={id}
    style={styleVariables || null}
    onchange={onChange}
/>
