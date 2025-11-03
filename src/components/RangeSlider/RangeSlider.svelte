<script lang="ts">
    import type { SvelteRangeSliderProps } from './rangeslider'

    import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper.svelte'

    import { classNames } from '../../utils/classNames'
    import { interpolate } from '../../utils/interpolate'

    import styles from './rangeslider.module.scss'

    const {
        min = 0,
        max = 100,
        selectedMin,
        selectedMax,
        step = 1,
        minGap = 5,
        disabled,
        color,
        background,
        thumb,
        label,
        subText,
        minLabel,
        maxLabel,
        minIcon,
        maxIcon,
        interactiveLabels,
        updateLabels,
        className,
        onChange
    }: SvelteRangeSliderProps = $props()

    const styleVariables = classNames([
        color && `--w-range-slider-color: ${color};`,
        background && `--w-range-slider-background: ${background};`,
        thumb && `--w-range-slider-thumb: ${thumb};`
    ])

    const minLabelWidth = `${String(max).length}ch`
    const labelStyle = updateLabels ? `min-width:${minLabelWidth};` : null

    let minValue = $state(selectedMin || min)
    let maxValue = $state(selectedMax || max)
    let dynamicMinLabel = $state(minLabel)
    let dynamicMaxLabel = $state(maxLabel)

    const rangeLeftPercent = $derived(interpolate((minValue || min), [min, max], [0, 100]))
    const rangeRightPercent = $derived(interpolate((maxValue || max), [min, max], [100, 0]))

    const updateDynamicLabels = (minValue: number, maxValue: number) => {
        if (dynamicMinLabel && dynamicMaxLabel) {
            dynamicMinLabel = dynamicMinLabel.replace(/\d+(\.\d+)?/, String(minValue))
            dynamicMaxLabel = dynamicMaxLabel.replace(/\d+(\.\d+)?/, String(maxValue))
        }
    }

    const handleInput = (event: Event) => {
        const target = event.target

        if (!(target instanceof HTMLInputElement)) {
            return
        }

        if (maxValue - minValue >= minGap) {
            if (updateLabels) {
                updateDynamicLabels(minValue, maxValue)
            }

            onChange?.({
                min: minValue,
                max: maxValue
            })
        } else if (target.dataset.min) {
            minValue = maxValue - Math.max(step, minGap)
            target.value = String(minValue)
        } else {
            maxValue = minValue + Math.max(step, minGap)
            target.value = String(maxValue)
        }
    }

    const handleClick = (event: Event, direction: 'left' | 'right') => {
        const target = event.currentTarget

        if (!(target instanceof HTMLButtonElement)) {
            return
        }

        const dir = direction === 'left' ? -1 : 1
        const updatedMinValue = Number(minValue) + (dir * step)
        const updatedMaxValue = Number(maxValue) + (dir * step)

        if (updatedMinValue < min || updatedMaxValue > max) {
            return
        }

        minValue = updatedMinValue
        maxValue = updatedMaxValue

        if (updateLabels) {
            updateDynamicLabels(minValue, maxValue)
        }

        onChange?.({
            min: minValue,
            max: maxValue
        })
    }
</script>

<ConditionalWrapper
    element="label"
    condition={!!(label || subText)}
    class={classNames([styles.label, className])}
>
    {#if label}
        <span>{label}</span>
    {/if}

    <div
        class={classNames([styles.container, !(label && subText) && className])}
        style={styleVariables}
    >
        <ConditionalWrapper
            element="button"
            condition={!!interactiveLabels}
            onclick={(e: Event) => handleClick(e, 'left')}
        >
            {#if minIcon}
                {@html minIcon}
            {/if}
            {#if dynamicMinLabel}
                <span style={labelStyle}>{dynamicMinLabel}</span>
            {/if}
        </ConditionalWrapper>

        <div class={styles.slider}>
            <div
                data-disabled={disabled ? 'true' : undefined}
                class={styles.range}
                style={`
                    left: ${rangeLeftPercent}%;
                    right: ${rangeRightPercent}%;
                `}
            ></div>
            <input
                type="range"
                class={classNames([styles.input, styles.min])}
                min={min}
                max={max}
                bind:value={minValue}
                step={step}
                disabled={disabled}
                oninput={handleInput}
                data-min="true"
            />
            <input
                type="range"
                min={min}
                max={max}
                class={styles.input}
                bind:value={maxValue}
                step={step}
                disabled={disabled}
                oninput={handleInput}
                data-max="true"
            />
        </div>

        <ConditionalWrapper
            element="button"
            condition={!!interactiveLabels}
            onclick={(e: Event) => handleClick(e, 'right')}
        >
            {#if maxIcon}
                {@html maxIcon}
            {/if}
            {#if dynamicMaxLabel}
                <span style={labelStyle}>{dynamicMaxLabel}</span>
            {/if}
        </ConditionalWrapper>
    </div>

    {#if subText}
        <span class="muted">{subText}</span>
    {/if}
</ConditionalWrapper>
