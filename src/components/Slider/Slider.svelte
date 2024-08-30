<script lang="ts">
    import type { SvelteSliderProps } from './slider'

    import { classNames } from '../../utils/classNames'

    import styles from './slider.module.scss'

    export let min: SvelteSliderProps['min'] = 0
    export let max: SvelteSliderProps['max'] = 100
    export let value: SvelteSliderProps['value'] = 0
    export let step: SvelteSliderProps['step'] = 1
    export let disabled: SvelteSliderProps['disabled'] = false
    export let color: SvelteSliderProps['color'] = ''
    export let background: SvelteSliderProps['background'] = ''
    export let thumb: SvelteSliderProps['thumb'] = ''
    export let id: SvelteSliderProps['id'] = ''
    export let className: SvelteSliderProps['className'] = ''
    export let onChange: SvelteSliderProps['onChange'] = () => {}

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
    id={id || null}
    style={styleVariables || null}
    on:change={onChange}
/>
