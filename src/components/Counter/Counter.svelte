<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import type { CounterProps } from './counter'

    import { classNames } from '../../utils/classNames'

    import minusIcon from '../../icons/minus.svg?raw'
    import plusIcon from '../../icons/plus.svg?raw'

    import styles from './counter.module.scss'

    export type SvelteCounterProps = {
        onChange?: (value: number) => void
    } & CounterProps<HTMLInputAttributes>

    let {
        type = 'compact',
        theme,
        rounded,
        minIcon,
        maxIcon,
        className,
        width,
        value = $bindable(0),
        disabled,
        onChange,
        step = 1,
        min,
        max,
        ...rest
    }: SvelteCounterProps = $props()

    const classes = $derived(classNames([
        styles.counter,
        styles[type],
        theme && styles[theme],
        rounded && styles.rounded,
        className
    ]))

    const subtractIcon = $derived(minIcon || minusIcon)
    const addIcon = $derived(maxIcon || plusIcon)

    const styleVariable = $derived(width
        ? `--w-counter-width: ${width};`
        : null
    )

    let intervalId: ReturnType<typeof setTimeout>
    let timeoutId: ReturnType<typeof setTimeout>
    let longPressDelay = 500
    let isKeyDown = false

    const updateValue = (isMin?: boolean) => {
        const direction = isMin ? -1 : 1
        const newValue = value + (direction * Number(step))

        if ((min !== undefined && newValue < Number(min)) || (max !== undefined && newValue > Number(max))) {
            return
        }

        value = newValue

        onChange?.(newValue)
    }

    const startHold = (event: Event) => {
        const target = event.currentTarget

        if (target instanceof HTMLButtonElement) {
            const isMin = target.dataset.id === 'w-counter-min'

            updateValue(isMin)

            timeoutId = setTimeout(function repeat() {
                updateValue(isMin)

                longPressDelay = Math.max(50, longPressDelay * 0.8)
                intervalId = setTimeout(repeat, longPressDelay)
            }, 500)
        }
    }

    const stopHold = () => {
        clearTimeout(timeoutId)
        clearTimeout(intervalId)

        isKeyDown = false
        longPressDelay = 500
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' && !isKeyDown) {
            event.preventDefault()
            startHold(event)

            isKeyDown = true
        }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            stopHold()
        }
    }
</script>

<div class={classes} style={styleVariable}>
    <button
        data-id="w-counter-min"
        disabled={disabled}
        onmousedown={startHold}
        ontouchstart={startHold}
        onmouseup={stopHold}
        onmouseleave={stopHold}
        ontouchend={stopHold}
        ontouchcancel={stopHold}
        onkeydown={handleKeyDown}
        onkeyup={handleKeyUp}
    >
        {@html subtractIcon}
    </button>
    <input
        {...rest}
        bind:value={value}
        type="number"
        disabled={disabled}
        step={step}
        min={min}
        max={max}
        oninput={() => onChange?.(value)}
    />
    <button
        data-id="w-counter-max"
        disabled={disabled}
        onmousedown={startHold}
        ontouchstart={startHold}
        onmouseup={stopHold}
        onmouseleave={stopHold}
        ontouchend={stopHold}
        ontouchcancel={stopHold}
        onkeydown={handleKeyDown}
        onkeyup={handleKeyUp}
    >
        {@html addIcon}
    </button>
</div>
