<script lang="ts">
    import type { OTPInputProps } from './otpinput'

    import Input from '../Input/Input.svelte'

    import { classNames } from '../../utils/classNames'

    import styles from './otpinput.module.scss'

    let {
        name = 'otp',
        disabled,
        length = 6,
        groupLength = 0,
        separator = '•',
        label,
        subText,
        className,
        value = $bindable(''),
        ...rest
    }: OTPInputProps = $props()

    const classes = classNames([
        styles.wrapper,
        className
    ])

    const inputs = Array.from({ length }, (_, i) => i + 1)
        .reduce<(number | string)[]>((acc, num, i) =>
            groupLength > 0 && i % groupLength === 0 && i !== 0
                ? [...acc, separator, num]
                : [...acc, num]
        , [])

    const focus = (direction: 'next' | 'prev', wrapper: HTMLElement | null, clear?: boolean) => {
        const index = Number(wrapper?.dataset.active)
        const nextIndex = direction === 'next' ? index + 1 : index - 1

        const input = wrapper?.querySelector(`[data-index="${nextIndex}"]`)

        if (input instanceof HTMLInputElement) {
            input.focus()

            if (clear) {
                input.value = ''
            }
        }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        const target = event.target as HTMLInputElement

        if (event.key === 'Backspace' || event.key === 'Delete') {
            if (!target.value) {
                focus('prev', target.parentElement, true)
            }
        }

        if (event.key === 'ArrowLeft') {
            focus('prev', target.parentElement)
        }

        if (event.key === 'ArrowRight') {
            focus('next', target.parentElement)
        }
    }

    const handleInput = (event: Event) => {
        const target = event.target

        if (!(target instanceof HTMLInputElement)) {
            return
        }

        const index = Number(target.dataset.index)
        const emptyIndex = Array.from(target.parentElement?.querySelectorAll('input') || [])
            .findIndex(element => !element.value) + 1

        if (emptyIndex !== 0 && emptyIndex < index) {
            const emptyElement = target.parentElement?.querySelector(`[data-index="${emptyIndex}"]`)
            const nextFocusElement = target.parentElement?.querySelector(`[data-index="${emptyIndex + 1}"]`)

            if (emptyElement instanceof HTMLInputElement) {
                emptyElement.value = target.value
            }

            if (nextFocusElement instanceof HTMLInputElement) {
                nextFocusElement.focus()
            }

            target.value = ''

            return
        }

        if (target.value) {
            focus('next', target.parentElement)
        }
    }

    const handlePaste = (event: ClipboardEvent) => {
        event.preventDefault()

        const target = event.target
        const container = target instanceof HTMLInputElement ? target.parentElement : null

        if (container) {
            const paste = event.clipboardData?.getData('text') ?? ''
            const nextIndex = Math.min(paste.length + 1, length)
            const focusInput = container.querySelector(`[data-index="${nextIndex}"]`)

            if (focusInput instanceof HTMLInputElement) {
                focusInput.focus()
            }

            paste.split('').slice(0, length).forEach((char, i) => {
                const input = container.querySelector(`[data-index="${i + 1}"]`)

                if (input instanceof HTMLInputElement) {
                    input.value = char
                }
            })
        }
    }

    const handleFocus = (event: Event) => {
        const target = event.target

        if (target instanceof HTMLInputElement) {
            if (target.parentElement) {
                target.parentElement.dataset.active = target.dataset.index
            }

            setTimeout(() => target.select(), 0)
        }
    }

    const handleKeyUp = (event: Event) => {
        const target = event.target
        const container = target instanceof HTMLInputElement ? target.parentElement : null

        if (container) {
            const newValue = Array.from(container.querySelectorAll('input') || [])
                .map(input => input.value)
                .join('')

            value = newValue
        }
    }
</script>

<div class={classes}>
    {#if label}
        <label for={`${name}-0`} class={styles.label}>{@html label}</label>
    {/if}

    <div class={styles['input-wrapper']}>
        {#each inputs as input, index}
            {#if typeof input === 'string'}
                <div class={styles.separator}>{input}</div>
            {:else}
                <Input
                    id={`${name}-${index}`}
                    className={styles.input}
                    type="text"
                    maxlength="1"
                    disabled={disabled}
                    inputmode="numeric"
                    autocomplete="one-time-code"
                    data-index={input}
                    aria-label={`OTP digit ${input + 1}`}
                    onkeydown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    onfocus={handleFocus}
                    onInput={handleInput}
                    onpaste={handlePaste}
                    {...rest}
                />
            {/if}
        {/each}
    </div>

    {#if subText}
        <div class={styles.subtext}>
            {@html subText}
        </div>
    {/if}
</div>
